import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">This room doesn't exist</h1>
      <Link to="/chat" className="text-teal-700 underline">Back to chat</Link>
    </div>
  )
}

export default NotFound