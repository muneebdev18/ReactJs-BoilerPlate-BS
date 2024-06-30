import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/home' 
import ScrollToTopButton from './components/ScrollTopButton'
function App() {
  return (
    <>
    <Router>
      {/* Header */}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      {/* Footer */}
      <ScrollToTopButton/>
    </Router>
    </>
  )
}

export default App
