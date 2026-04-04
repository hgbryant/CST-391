import React, { useState } from 'react';
import Card from './Card';
import './App.css';

const App = () => {
  const [albumList, setAlbumList] = useState([
    {
      artistId: 0,
      artist: 'The Beatles',
      title: 'Yellow Submarine',
      description:
        'Yellow Submarine is the tenth studio album by English rock band the Beatles, released on 13 January 1969 in the United States and on 17 January 1969 in the United Kingdom.',
      year: 1969,
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg",
    },
    {
      artistId: 1,
      artist: 'The Beatles',
      title: 'Abbey Road',
      description:
        'Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969, by Apple Records.',
      year: 1969,
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/The_Beatles_Abbey_Road_album_cover.jpg",
    },
    {
      artistId: 2,
      artist: 'The Beatles',
      title: 'Let It Be',
      description:
        "Let It Be is the twelfth and final studio album by the English rock band the Beatles. It was released on 8 May 1970, almost a month after the group's break-up.",
      year: 1970,
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Beatles_-_Let_It_Be.png",
    },
    {
      artistId: 3,
      artist: 'The Beatles',
      title: 'With the Beatles',
      description:
        "With the Beatles is the second studio album by the English rock band the Beatles. It was released in the United Kingdom on 22 November 1963 on Parlophone, eight months after the release of the band's debut album, Please Please Me. ",
      year: 1970,
      image: "https://upload.wikimedia.org/wikipedia/en/5/52/With_the_Beatles.png",
    },
    {
      artistId: 4,
      artist: 'The Beatles',
      title: 'Revolver',
      description:
        "Revolver is the seventh studio album by the English rock band the Beatles. It was released on 5 August 1966, accompanied by the double A-side single Eleanor Rigby and Yellow Submarine",
      year: 1970,
      image: "https://upload.wikimedia.org/wikipedia/en/e/ec/Revolver_%28album_cover%29.jpg",
    },
    {
      artistId: 5,
      artist: 'The Beatles',
      title: 'Rubber Soul',
      description:
        "Rubber Soul is the sixth studio album by the English rock band the Beatles. It was released on 3 December 1965 in the United Kingdom on EMI's Parlophone label, accompanied by the non-album double A-side single We Can Work It Out / Day Tripper.",
      year: 1965,
      image: "https://upload.wikimedia.org/wikipedia/en/5/5b/Rubber_Soul.png",
    },

  ]);

  const renderedList = () => {
    return albumList.map((album) => {
      return (
        <Card
          albumTitle={album.title}
          albumDescription={album.description}
          buttonText='OK'
          imgURL={album.image}
        />
      );
    });
  };

  return <div className='container'>{renderedList()}</div>;
};

export default App;
