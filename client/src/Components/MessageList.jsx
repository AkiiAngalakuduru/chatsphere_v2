if (messages.length === 0) {
return <p className="empty">No messages yet</p>
}
return (
<div className="messages">
{messages.map((m) => (
<MessageBubble key={m.id} text={m.text} isMine={m.isMine} />
))}
</div>
)