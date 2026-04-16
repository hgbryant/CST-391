import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataSource from "./dataSource";

const OneAlbum = () => {
    const { albumId } = useParams();   
    const [album, setAlbum] = useState({});
    const [openTrack, setOpenTrack] = useState(null);

    const [newSongTitle, setNewSongTitle] = useState("");
    const [newLyrics, setNewLyrics] = useState("");

    useEffect(() => {
        const loadAlbum = async () => {
            const response = await dataSource.get(`/albums?albumId=${albumId}`);
            setAlbum(response.data[0]); 
        };

        loadAlbum();
    }, [albumId]);

    const toggleLyrics = (index) => {
        setOpenTrack(openTrack === index ? null : index);
    };

const handleAddSong = () => {
    if (!newSongTitle.trim()) return;

    const newTrack = {
        title: newSongTitle,
        lyrics: newLyrics || "No lyrics yet",
        video: ""
    };

    setAlbum((prev) => ({
        ...prev,
        tracks: [...(prev.tracks || []), newTrack]
    }));

    setNewSongTitle("");
    setNewLyrics("");
};

    return (
        <div className='container mt-4'>
            <h2 className="mb-4">Album Details for {album.title}</h2>

            <div className='row'>

                <div className='col-md-4'>
                    <div className='card shadow-sm'>
                        <img 
                            src={album.image} 
                            className='card-img-top' 
                            alt={album.title}
                        />
                    </div>
                </div>

                <div className='col-md-8'>

                    <div className='card shadow-sm mb-3'>
                        <div className='card-body'>
                            <h3 className='card-title'>{album.title}</h3>
                            <p className='card-text'>{album.description}</p>

                            <p><strong>Artist:</strong> {album.artist}</p>
                            <p><strong>Year:</strong> {album.year}</p>
                        </div>
                    </div>

                    <div className='card shadow-sm'>
                        <div className='card-body'>
                            <h5 className="mb-3">Tracks</h5>

                            
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Enter song title"
                                    value={newSongTitle}
                                    onChange={(e) => setNewSongTitle(e.target.value)}
                                />

                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Enter lyrics"
                                    value={newLyrics}
                                    onChange={(e) => setNewLyrics(e.target.value)}
                                />

                                <button
                                    className="btn btn-primary"
                                    onClick={handleAddSong}
                                >
                                    Add Song
                                </button>
                            </div>

                            <div className="list-group">
                                {album.tracks?.map((track, index) => (
                                    <div key={index} className="list-group-item">

                                        <strong>{track.title}</strong>

                                        <div className="mt-2">
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() => toggleLyrics(index)}
                                            >
                                                {openTrack === index ? "Hide Lyrics" : "View Lyrics"}
                                            </button>
                                        </div>

                                        {track.video && (
                                            <div className="mt-2">
                                                <a href={track.video} target="_blank" rel="noreferrer">
                                                    Watch Video
                                                </a>
                                            </div>
                                        )}

                                        {openTrack === index && track.lyrics && (
                                            <p className="mt-2">{track.lyrics}</p>
                                        )}

                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OneAlbum;