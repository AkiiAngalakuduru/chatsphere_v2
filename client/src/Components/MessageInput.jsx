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
    <form onSubmit={handleSubmit} className="flex gap-2 p-3 bg-gray-100">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message"
        className="flex-1 px-4 py-2 rounded-full border border-gray-300 outline-none focus:border-teal-500"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="px-4 py-2 rounded-full bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50"
      >
        Send
      </button>
    </form>
  )
}

export default MessageInput
