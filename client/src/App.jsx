import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="h-screen max-w-3xl mx-auto flex flex-col">
      {/* Step 6: nav bar, the inside doors (never moves) */}
      <nav className="flex gap-4 px-4 py-3 bg-teal-700 text-white">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/chat">Chat</Link>
      </nav>

      {/* Step 5: Rita's map, where the rooms swap */}
      <div className="flex-1 min-h-0">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App