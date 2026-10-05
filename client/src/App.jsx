import MessageBubble from "./Components/MessageBubble";
function App(){
  return(
    <div>
      <h1>ChatSphere</h1>
      <MessageBubble sender="Akhil" text="hi" time="10:30"/>
      <MessageBubble sender="habeeb" text="hey hi" time="10:31"/>
      <MessageBubble sender="Akhil" text="whats up" time="10:32"/>
      <MessageBubble sender="Raju" text="kingkong"  time="12:09"/>
      <MessageBubble text="who sent this?" />
    </div>
  );
}
export default App;