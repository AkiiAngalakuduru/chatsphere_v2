import { useState } from 'react'
import MessageList from './components/MessageList'
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

  // App.jsx: the room
  return (
    
    <div className="h-screen max-w-3xl mx-auto flex flex-col bg-[#efeae2]">
      
      <header className="h-14 px-4 flex items-center justify-between bg-teal-700 text-white">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full grid place-items-center bg-white text-teal-700">
            A
          </div>
          <span className="font-semibold">ChatSphere</span>
        </div>
        <span className="hidden sm:block text-sm">online</span>
      </header>
      
      <MessageList messages={messages} />
      <MessageInput onSend={addMessage} />
    </div>
  )
}

export default App
