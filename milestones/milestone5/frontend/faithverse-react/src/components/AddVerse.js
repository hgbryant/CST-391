import { useState } from 'react';
import { addVerse } from '../services/verseService';
import { useNavigate } from 'react-router-dom';

const bibleBooks = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
  "Joshua", "Judges", "Ruth",
  "1 Samuel", "2 Samuel", "1 Kings", "2 Kings",
  "1 Chronicles", "2 Chronicles",
  "Ezra", "Nehemiah", "Esther",
  "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon",
  "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel",
  "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah",
  "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi",
  "Matthew", "Mark", "Luke", "John", "Acts",
  "Romans", "1 Corinthians", "2 Corinthians",
  "Galatians", "Ephesians", "Philippians", "Colossians",
  "1 Thessalonians", "2 Thessalonians",
  "1 Timothy", "2 Timothy", "Titus", "Philemon",
  "Hebrews", "James", "1 Peter", "2 Peter",
  "1 John", "2 John", "3 John", "Jude", "Revelation"
];

export default function AddVerse() {
  const [book, setBook] = useState('');
  const [bookSuggestions, setBookSuggestions] = useState([]);
  const [chapter, setChapter] = useState('');
  const [verseNumber, setVerseNumber] = useState('');
  const [verseText, setVerseText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVerse = {
      book,
      chapter,
      verse_number: verseNumber,
      verse_text: verseText
    };

    addVerse(newVerse)
      .then(() => {
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">

      <div className="card">

        <h2 className="verse-title">Add New Verse</h2>

        <form onSubmit={handleSubmit}>

          <input
            className="formInput"
            placeholder="Book (e.g. John)"
            value={book}
            onChange={(e) => {
              const value = e.target.value;
              setBook(value);

              if (value.length > 0) {
                const matches = bibleBooks.filter(b =>
                  b.toLowerCase().startsWith(value.toLowerCase())
                );
                setBookSuggestions(matches);
              } else {
                setBookSuggestions([]);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Tab" && bookSuggestions.length > 0) {
                e.preventDefault();
                setBook(bookSuggestions[0]);
                setBookSuggestions([]);
              }
            }}
          />

          {bookSuggestions.length > 0 && (
            <div className="suggestionsBox">
              {bookSuggestions.map((s, i) => (
              <div
                key={i}
                className="suggestionItem"
                onClick={() => {
                  setBook(s);
                  setBookSuggestions([]);
                }}
              >
                {s}
              </div>
            ))}
          </div>
        )}
        
          <input
            className="formInput"
            placeholder="Chapter"
            type="number"
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
          />

          <input
            className="formInput"
            placeholder="Verse Number"
            type="number"
            value={verseNumber}
            onChange={(e) => setVerseNumber(e.target.value)}
          />

          <textarea
            className="formInput"
            placeholder="Verse Text"
            value={verseText}
            onChange={(e) => setVerseText(e.target.value)}
          />
          
          <div className="formActions">
            <button type="submit" className="edit">
              Save Verse
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}