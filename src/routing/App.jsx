import { BrowserRouter , Routes, Route } from 'react-router'
import Home from './../pages/Home.jsx'
import Projects from './../pages/Projects.jsx'
function App() {
  return (
  <>
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<Projects />} />
</Routes>
</BrowserRouter>
  </>
  )
}
export default App
