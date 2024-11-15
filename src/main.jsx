import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<div className="min-h-screen min-w-screen flex justify-center items-center bg-gradient-to-l from-violet-950 via-50% to-violet-800 to-90%">
  <App />
</div>

)
