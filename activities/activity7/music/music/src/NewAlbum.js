import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dataSource from "./dataSource";

const NewAlbum = () => {
    const { artistId } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = async () => {
        if (!title.trim()) return;

        const newAlbum = {
            artistId: Number(artistId),
            title,
            description,
            year: Number(year),
            image
        };

        try {
            await dataSource.post("/albums", newAlbum);

            navigate("/");
        } catch (err) {
            console.error("Error creating album:", err);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Add New Album</h2>


            <input
                className="form-control mb-2"
                placeholder="Album title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                className="form-control mb-2"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <input
                className="form-control mb-2"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />

            <input
                className="form-control mb-2"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <button className="btn btn-primary" onClick={handleSubmit}>
                Add Album
            </button>
        </div>
    );
};

export default NewAlbum;