import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop' // ADD THIS
import Home from './pages/Home'
import About from './pages/About'
import Officers from './pages/Officers'
import Projects from './pages/Projects'
import Events from './pages/Events' // Make sure you have this
import Calendar from './pages/Calendar'
import JoinUs from './pages/JoinUs'
import WhyJoin from './pages/WhyJoin'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      <Navbar />
      <ScrollToTop /> {/* ADD THIS - Place it right after Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/why-join" element={<WhyJoin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App