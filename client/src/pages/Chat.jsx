import { useState, useEffect } from 'react'
import MessageList from '../components/MessageList'
import MessageInput from '../components/MessageInput'
const STORAGE_KEY = 'chatsphere-messages'
const initialMessages = [
  { id: 1, text: 'Hey Akhil!', isMine: false },
  { id: 2, text: 'Hi! Building ChatSphere', isMine: true },
  { id: 3, text: 'Nice, how far are you?', isMine: false },
]
// 1. check the locker
function loadMessages() {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved ? JSON.parse(saved) : initialMessages
}
function Chat() {
  // 2. start the board from the locker, once
  const [messages, setMessages] = useState(loadMessages)
  // 3 + 4. Effie: whenever the board changes, copy it into the locker
  useEffect(() => {
    console.log('Effie saved', messages.length, 'messages')
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }, [messages])
  function addMessage(text) {
    const newMessage = { id: Date.now(), text: text, isMine: true }
    setMessages([...messages, newMessage])
  }
  return (
    <div className="h-full flex flex-col bg-[#efeae2]">
      <MessageList messages={messages} />
      <MessageInput onSend={addMessage} />
    </div>
  )
}
export default Chat