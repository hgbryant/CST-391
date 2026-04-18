import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VerseList from './components/VerseList';
import AddVerse from './components/AddVerse';
import './App.css';

export default function App() {
  return (
    <Router>

      <header className="appHeader">
        FaithVerse
      </header>

       <nav className="navBar">
        <Link to="/" className="navLink">Home</Link>
        <Link to="/add" className="navLink">Add Verse</Link>
      </nav>

      <Routes>
        <Route path="/" element={<VerseList />} />
        <Route path="/add" element={<AddVerse />} />
      </Routes>

    </Router>
  );
}