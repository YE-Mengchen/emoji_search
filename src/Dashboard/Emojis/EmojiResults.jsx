import React, { useEffect } from "react";
import EmojiResultRow from "./EmojiResultRow";
import Clipboard from "clipboard";

const EmojiResults = ({ emojiData }) => {
  useEffect(() => {
    const clipboard = new Clipboard(".copy-it");
    
    // Clean up function
    return () => {
      clipboard.destroy();
    };
  }, []); // Empty dependency array means this useEffect runs once when component mounts, and cleanup when it unmounts
  
  return (
    <div className="component-emoji-results">
      {emojiData.map((emoji) => (
        <EmojiResultRow
          key={emoji.title}
          symbol={emoji.symbol}
          title={emoji.title}
        />
      ))}
    </div>
  );
};

export default EmojiResults;
