import React, { useState } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
    <div>
      <SavedList list={savedList} />
      <div>
      <Route exact path="/" component={MovieList}></Route>
      <Route path="/movies/:id"  exact component={Movie}></Route>
      </div>
    </div>
    </Router>
  );
};

export default App;
