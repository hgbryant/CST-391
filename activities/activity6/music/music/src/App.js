import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";
import SearchForm from "./SearchForm";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SearchAlbum from "./SearchAlbum";
import NavBar from "./NavBar";
import NewAlbum from "./NewAlbum";
import OneAlbum from "./OneAlbum";
import dataSource from "./dataSource"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = (props) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [albumList, setAlbumList] = useState([]);
  const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(0);

  let refresh = false;

  const updateSearchResults = (phrase) => {
    console.log('phrase is '+ phrase);
    setSearchPhrase(phrase);
  };
  
  useEffect(() =>{
    loadAlbums();
  }, [refresh]);

  const loadAlbums = async () => {
    const response = await dataSource.get('/albums');

    setAlbumList(response.data);
  }
  const updateSingleAlbum = (id, navigate) => {
  console.log('Update Single Album = ', id);
  console.log('Update Single Album = ', navigate);

  console.log('update path', '/show/' + id);
  navigate('/show/' + id);
};

  console.log('albumList', albumList);
  const renderedList = albumList.filter((album) => {
      if(album.description.toLowerCase().includes(searchPhrase.toLocaleLowerCase()) || searchPhrase === '')
      {return true;}
      return false;
  });

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path='/' element={
        <SearchAlbum 
          updateSearchResults={updateSearchResults}
          albumList={renderedList}
          updateSingleAlbum={updateSingleAlbum}
        />
      }
      />
      <Route exact path='/new' element={<NewAlbum />}/>
      <Route exact path='/show/:albumId' 
      element={<OneAlbum />} 
      />
    </Routes>
    </BrowserRouter>
  );
};
export default App;
