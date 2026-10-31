function MessageBubble({ text, isMine = false }) {
  return (
    <div className={isMine ? 'bubble mine' : 'bubble'}>
      {text}
    </div>
  )
}

export default MessageBubble;

