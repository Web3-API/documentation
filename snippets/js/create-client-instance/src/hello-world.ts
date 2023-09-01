// $start: js-create-client-instance
import { PolywrapClient } from "@polywrap/client-js";

const client = new PolywrapClient();
// $end

export function helloWorld() {
// $start: js-client-hello-world
client.invoke({
  uri: "wrapscan.io/polywrap/logging@1.0",
  method: "info",
  args: {
    message: "Hello World!"
  }
});
// $end
}
