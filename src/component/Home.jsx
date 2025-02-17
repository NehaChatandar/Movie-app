import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Home = () => {
  const [movieAllData, setMovieAllData] = useState([]);
  const [ratings, setRatings] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("movie");
  const [isDataAvailable, setIsDataAvailable] = useState(true);

  const getMovieData = async () => {
    try {
      const { data } = await axios.get(`http://www.omdbapi.com/?apikey=2eaba7a8&s=${searchKeyword}`);
      if (data?.Response == "True") {
        setMovieAllData(data?.Search);
        setIsDataAvailable(true);
        data.Search.forEach((movie) => getMovieRating(movie.imdbID));
      }
      if (data?.Response == "False") {
        setIsDataAvailable(false);
      }
      console.log("data", data);
      // console.log("movie data", data?.data?.Search);
    } catch (err) {
      console.log(err);
    }
  }

  const getMovieRating = async (imdbID) => {
    try {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=2eaba7a8&i=${imdbID}`);
      setRatings((prevRatings) => ({
        ...prevRatings,
        [imdbID]: data.imdbRating || "N/A", // Store rating with IMDb ID
      }));
    } catch (err) {
      console.error(`Error fetching rating for ${imdbID}:`, err);
    }
  };
  useEffect(() => {
    getMovieData();
  }, [searchKeyword])

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSearch = () => {
    setSearchKeyword(inputValue);
  }
  // console.log("input value", inputValue);
  // console.log(movieAllData);
  return (
    <>
      <div className="container-fluid">
        <div className="row px-4">
          <div className="col-6 d-flex flex-column gap-4">
            <div>
              <h1 className="heading-color">Watch Here Your Favourite</h1>
              <p className="heading-color"> Explore a vast collection of movies and TV shows from different genres, eras, and cultures.
                Whether you're looking for an action-packed thriller, a heartwarming drama, or a classic masterpiece,
                find everything here in just a few clicks. Start your search now and enjoy unlimited entertainment!</p>
            </div>
            <div className='d-flex gap-2'>
              <input type="text" className='input-field w-75 border-0 px-2' placeholder='Search Your Favourite.....'
                value={inputValue}
                onChange={handleInputChange} />
              <button className='w-25 border-0 search-button' onClick={handleSearch}>Search</button>
            </div>

          </div>

          <div className="row px-4 my-5 row-gap-4 gap-lg-3 gap-md-2 gap-sm-1 justify-content-between">

            {isDataAvailable ?
              movieAllData?.map((movie) => {
                return (
                  <div className="col-lg-2 col-md-3 col-sm-4" key={movie?.imdbID}>
                    <NavLink className="text-decoration-none" to={`/single/${movie?.imdbID}`}>
                      <div className="card-bg text-center rounded">
                        <img src={movie?.Poster} alt="movie-card" className="movie-card p-2 pb-0" />
                        <p className="fs-5 text-center m-0 py-2 heading-color text-overflow px-2">{movie.Title}</p>
                        <p className="fs-5 text-center heading-color">
                          Rating:
                          <span className='ms-2 font-size-18'><i className="fa-solid fa-star fs-6 text-yellow "></i> {ratings[movie.imdbID] || "Loading..."}</span>
                        </p>
                      </div>
                    </NavLink>

                  </div>
                )
              }) : <h1 className='fs-1 text-center text-white'>No Result Found</h1>
            }

          </div>
        </div>
      </div>

    </>
  )
}

export default Home