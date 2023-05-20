import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { Navbar } from '../components/Navbar';
import { Slider } from '../components/Slider';
import { NotAvailable } from '../components/NotAvailable';
import { SelectGenre } from '../components/SelectGenres';



export const Movies = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getGenres());
    }, []);
  
    useEffect(() => {
      if (genresLoaded) {
        dispatch(fetchMovies({  type: "all" }));
      }
    }, [genresLoaded]);
  
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/login");
    });
  
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  
  return (
    <Container>
<div className="navbar">
    <Navbar isScrolled={isScrolled}/>
</div>
<div className="data">
<SelectGenre type='movie' genres={genres}/>

    {
        movies.length ?<Slider type='movie' movies={movies}/>:<NotAvailable/>
    }
</div>
    </Container>
  )
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;