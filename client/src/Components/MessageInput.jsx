import { useState } from "react";

function MessageInput() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleSend() {
    console.log("Sending: " + text);
    setCount(count + 1);
    setText("");
  }

  function handleClear() {
    setCount(0);
    setText("");
    console.log("clear clicked");
  }

  return (
    <div>
      <input
        placeholder="type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
      <button onClick={handleClear}>Clear</button>
      <p>Messages sent: {count}</p>
      <p>You are typing: {text}</p>
    </div>
  );
}

export default MessageInput;