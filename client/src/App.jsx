import { useState } from 'react'
import MessageBubble from './components/MessageBubble'
import MessageInput from './components/MessageInput'

const initialMessages = [
{ id: 1, text: 'Hey Akhil!', isMine: false },
{ id: 2, text: 'Hi! Building ChatSphere', isMine: true },
{ id: 3, text: 'Nice, how far are you?', isMine: false },
]
function App() {

const [messages, setMessages] = useState(initialMessages)

function addMessage(text) {
const newMessage = { id: Date.now(), text: text, isMine: true }
setMessages([...messages, newMessage])
}
return (
<div>

{messages.map((m) => (
<MessageBubble key={m.id} text={m.text} isMine={m.isMine} />
))}

<MessageInput onSend={addMessage} />
</div>
)
}
export default App;