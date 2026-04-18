import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { getVerses, deleteVerse } from '../services/verseService';

export default function VerseList() {
  const [verses, setVerses] = useState([]);
  const [filteredVerses, setFilteredVerses] = useState([]);

  const [selectedBook, setSelectedBook] = useState('All');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // =========================
  // LOAD VERSES
  // =========================
  useEffect(() => {
    loadVerses();
  }, []);

  const loadVerses = () => {
    getVerses()
      .then(res => {
        setVerses(res.data);
        setFilteredVerses(res.data);
      })
      .catch(err => console.log(err));
  };

  // =========================
  // DELETE
  // =========================
  const handleDelete = (id) => {
    deleteVerse(id)
      .then(() => loadVerses())
      .catch(err => console.log(err));
  };

  // =========================
  // TOGGLE FAVORITE (DB)
  // =========================
  const toggleFavorite = (id) => {
    axios
      .patch(`http://localhost:3000/verses/${id}/favorite`)
      .then(() => loadVerses())
      .catch(err => console.log(err));
  };

  // =========================
  // FILTER FUNCTION (STABLE)
  // =========================
  const applyFilters = useCallback((book, favoritesOnly, search) => {
    let result = [...verses];

    if (book !== 'All') {
      result = result.filter(v => v.book === book);
    }

    if (favoritesOnly) {
      result = result.filter(v => v.is_favorite === 1);
    }

    if (search.trim() !== '') {
      result = result.filter(v =>
        v.book.toLowerCase().includes(search.toLowerCase()) ||
        v.verse_text.toLowerCase().includes(search.toLowerCase()) ||
        String(v.chapter).includes(search) ||
        String(v.verse_number).includes(search)
      );
    }

    setFilteredVerses(result);
  }, [verses]);

  // =========================
  // RE-RUN FILTERS
  // =========================
  useEffect(() => {
    applyFilters(selectedBook, showFavoritesOnly, searchTerm);
  }, [searchTerm, selectedBook, showFavoritesOnly, applyFilters]);

  // =========================
  // HANDLERS
  // =========================
  const handleBookFilter = (book) => {
    setSelectedBook(book);
  };

  const handleFavoriteFilter = (value) => {
    setShowFavoritesOnly(value);
  };

  const books = ['All', ...new Set(verses.map(v => v.book))];

  // =========================
  // UI
  // =========================
  return (
    <div className="container">

      <h2 className="verse-title">All Verses</h2>

      <div className="filterBar">

        <input
          type="text"
          placeholder="Search verses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchBarInline"
        />

        <label style={{ marginLeft: '15px' }}>Book:</label>
        <select
          value={selectedBook}
          onChange={(e) => handleBookFilter(e.target.value)}
        >
          {books.map(book => (
            <option key={book} value={book}>
              {book}
            </option>
          ))}
        </select>

        <label style={{ marginLeft: '15px' }}>
          <input
            type="checkbox"
            checked={showFavoritesOnly}
            onChange={(e) => handleFavoriteFilter(e.target.checked)}
          />
          Favorites
        </label>

      </div>

      <div className="verseGrid">

        {filteredVerses.map(v => (
          <div className="card" key={v.id}>

            <div className="verse-title">
              {v.book} {v.chapter}:{v.verse_number}
            </div>

            <div className="verse-text">
              “{v.verse_text}”
            </div>

            <div style={{ marginTop: "10px" }}>

              <button
                className={v.is_favorite ? "favorite active" : "favorite"}
                onClick={() => toggleFavorite(v.id)}
              >
                {v.is_favorite ? "★ Favorited" : "☆ Favorite"}
              </button>

              <button
                className="delete"
                onClick={() => handleDelete(v.id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}