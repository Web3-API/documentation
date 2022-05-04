import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, {useState} from 'react';
import "./styles.css";

const FeedbackWidget = ({label}) => {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  const [haveVoted, setHaveVoted] = useState(false);
  const giveFeedback = value => {
    if (window.ga) {
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'button',
        eventAction: 'feedback',
        eventLabel: label,
        eventValue: value,
      });
    }
    setHaveVoted(true);
  };

  return (
    <div className="feedbackWidget">
      {haveVoted ? (
        'Thanks for letting us know!'
      ) : (
        <>
          Is this page useful?
          <p className="feedbackEmoji thumbsup"
                onClick={() => giveFeedback(1)}>
            👍
          </p>
          <p className="feedbackEmoji thumbsdown"
                onClick={() => giveFeedback(1)}>
            👎
          </p>
        </>
      )}
    </div>
  );
};

export default FeedbackWidget;