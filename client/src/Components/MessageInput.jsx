import { useState } from 'react'

function MessageInput({ onSend }) {

const [text, setText] = useState('')

function handleSubmit(e) {
e.preventDefault() 
if (!text.trim()) return 
onSend(text) 
setText('') 
}
return (

<form onSubmit={handleSubmit}>

<input
value={text}
onChange={(e) => setText(e.target.value)}
placeholder="Type a message"
/>
<button type="submit">Send</button>
</form>
)
}
export default MessageInput