import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVerse } from '../services/verseService';

function VerseDetail() {
  const { id } = useParams();
  const [verse, setVerse] = useState(null);

  useEffect(() => {
    getVerse(id).then(res => setVerse(res.data));
  }, [id]);

  if (!verse) return <p>Loading...</p>;

  return (
    <div>
      <h2>{verse.book} {verse.chapter}:{verse.verse_number}</h2>
      <p>{verse.verse_text}</p>
    </div>
  );
}

export default VerseDetail;