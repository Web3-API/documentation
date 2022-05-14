import path from "path";
import fs from "fs";

export async function run() {
  // Load the snippets.json file
  const snippetsFilePath = path.resolve(
    path.join(__dirname, "../snippets/snippets.json")
  );
  const snippetsFile = fs.readFileSync(snippetsFilePath, "utf-8");
  const snippets: Record<string, string> = JSON.parse(snippetsFile);

  // Inject snippets into docs
  const docsDir = path.resolve(
    path.join(__dirname, "../docs")
  );
  await injectSnippets(
    snippets,
    docsDir
  );
}

async function injectSnippets(
  snippets: Record<string, string>,
  dir: string
) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });

  // Only search specific types of files
  const exts = ["md"];
  const matchExt = (filename: string) => {
    for (const ext of exts) {
      if (filename.indexOf(`.${ext}`) > -1) {
        return true;
      }
    }
    return false;
  }

  for (const dirent of dirents) {
    const direntPath = path.join(dir, dirent.name);

    if (dirent.isFile() && matchExt(dirent.name)) {
      await injectSnippetIntoFile(snippets, direntPath);
    } else if (dirent.isDirectory()) {
      await injectSnippets(snippets, direntPath);
    }
  }
}

async function injectSnippetIntoFile(
  snippets: Record<string, string>,
  filePath: string
) {
  let contents = fs.readFileSync(filePath, "utf-8");
  let modified = false;
  let index = 0;

  while (index < contents.length) {
    const marker = "$snippet: ";
    const markerIdx = contents.indexOf(marker, index);

    if (markerIdx < 0) {
      index = contents.length;
      continue;
    }

    const nameStartIdx = markerIdx + marker.length;
    const nameEndIdx = contents.indexOf("\n", nameStartIdx);
    const name = contents.substr(nameStartIdx, nameEndIdx - nameStartIdx);

    if (!snippets[name]) {
      throw Error(`Unknown Snippet: ${name} in ${filePath}`);
    }

    contents = contents.replace(
      `${marker}${name}\n`,
      `${snippets[name]}\n`
    );
    console.log("- Inject Snippet", name, "into", filePath);

    modified = true;
    index = markerIdx + snippets[name].length;
  }

  if (modified) {
    fs.writeFileSync(
      filePath,
      contents,
      "utf-8"
    );
  }
}
