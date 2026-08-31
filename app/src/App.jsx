import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Intro from './pages/Intro'
import Home from './pages/Home'
import Edu from './pages/Edu'
import Txt from './pages/Txt'
import Dec2025 from './pages/months/Dec2025'
import Jan2026 from './pages/months/Jan2026'
import Feb2026 from './pages/months/Feb2026'
import Mar2026 from './pages/months/Mar2026'
import Apr2026 from './pages/months/Apr2026'
import May2026 from './pages/months/May2026'
import June2026 from './pages/months/June2026'
import July2026 from './pages/months/July2026'
import Aug2026 from './pages/months/Aug2026'
import Notes2025 from './pages/months/Notes2025'
import Gestalt from './pages/months/Gestalt'
import Etc from './pages/Etc'
import Nav from './components/Nav'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/edu" element={<Edu />} />
          <Route path="/txt" element={<Txt />} />
          <Route path="/txt/dec25" element={<Dec2025 />} />
          <Route path="/txt/jan26" element={<Jan2026 />} />
          <Route path="/txt/feb26" element={<Feb2026 />} />
          <Route path="/txt/mar26" element={<Mar2026 />} />
          <Route path="/txt/apr26" element={<Apr2026 />} />
          <Route path="/txt/may26" element={<May2026 />} />
          <Route path="/txt/june26" element={<June2026 />} />
          <Route path="/txt/july26" element={<July2026 />} />
          <Route path="/txt/aug26" element={<Aug2026 />} />
          <Route path="/txt/2025" element={<Notes2025 />} />
          <Route path="/txt/gestalt" element={<Gestalt />} />
          <Route path="/etc" element={<Etc />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  )
}

export default App
