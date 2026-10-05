function MessageBubble({sender="Unknown",text,time="just now"}){
    return(
        <div>
            <b>{sender}</b>
            <p>{text}</p>
            <span>{time}</span>
            
        </div>
    );
}
export default MessageBubble;
