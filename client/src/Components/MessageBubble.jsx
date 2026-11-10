function MessageBubble({ text, isMine = false }) {
  const base = 'max-w-[70%] px-3 py-2 rounded-2xl border'
  
  const side = isMine
    ? 'self-end bg-green-100 border-green-200'
    : 'self-start bg-white border-gray-200'

  return <div className={`${base} ${side}`}>{text}</div>
}

export default MessageBubble
