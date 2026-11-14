import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  return (
    <div className="h-full grid place-items-center">
      <div className="flex flex-col gap-3 w-72">
        <h1 className="text-2xl font-semibold">Log in</h1>
        <button
          onClick={() => navigate('/chat')}
          className="px-4 py-2 rounded bg-teal-600 text-white"
        >
          Log in (fake for now)
        </button>
      </div>
    </div>
  )
}

export default Login