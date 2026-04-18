import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVerse, updateVerse } from '../services/verseService';

function EditVerse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    book: '',
    chapter: '',
    verse_number: '',
    verse_text: ''
  });

  useEffect(() => {
    getVerse(id).then(res => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateVerse(id, form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="book" value={form.book} onChange={handleChange} />
      <input name="chapter" value={form.chapter} onChange={handleChange} />
      <input name="verse_number" value={form.verse_number} onChange={handleChange} />
      <textarea name="verse_text" value={form.verse_text} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditVerse;