import MessageBubble from './MessageBubble'

function MessageList({ messages }) {
  if (messages.length === 0) {
    return (
      <p className="flex-1 grid place-items-center text-gray-500">
        No messages yet
      </p>
    )
  }
  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-2 p-4">
      {messages.map((m) => (
        <MessageBubble key={m.id} text={m.text} isMine={m.isMine} />
      ))}
    </div>
  )
}

export default MessageList
