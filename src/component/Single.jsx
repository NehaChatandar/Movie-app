import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Single = () => {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSingleData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=2eaba7a8&i=${id}`);
      setSingleMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleData();
  }, [id]);

  return (
    <div className="container">
      <div className="row justify-content-center px-3 my-2">
        {loading ? (
          // ✅ Show loading while data fetches
          <h2 className="text-light text-center my-5">Loading...</h2>
        ) : singleMovie ? (
          <>
            {/* 🎬 Movie Poster (Left Side) */}
            <div className="col-lg-4 col-md-5 col-sm-8 col-12 text-center mb-4">
              <img src={singleMovie?.Poster} alt={singleMovie?.Title} className="single-poster img-fluid rounded shadow-lg" />
            </div>

            {/* 📜 Movie Details (Right Side) */}
            <div className="col-lg-6 col-md-7 col-sm-10 col-12 ms-4">
              <h1 className="text-light">{singleMovie?.Title}</h1>
              <p className="text-light font-size-18">{singleMovie?.Plot}</p>

              <div className="mt-3">
                <p className="text-gray m-0 fs-5"> Actors</p>
                <p className="text-light font-size-18 m-0">{singleMovie?.Actors}</p>
              </div>

              <div className="mt-3">
                <p className="text-gray m-0 fs-5"> Ratings</p>
                <p className="font-size-18 m-0 text-yellow p-2 card-bg d-inline-block rounded">
                  <i className="fa-solid fa-star font-size-16 me-1"></i>
                  {singleMovie?.imdbRating}
                </p>
              </div>

              <div className="mt-3">
                <p className="text-gray m-0 fs-5">Awards</p>
                <p className="text-light font-size-18 m-0">{singleMovie?.Awards}</p>
              </div>

              <div className="mt-3">
                <p className="text-gray m-0 fs-5"> Country</p>
                <p className="text-light font-size-18 m-0">{singleMovie?.Country}</p>
              </div>

              <div className="mt-3">
                <p className="text-gray m-0 fs-5">Language</p>
                <p className="text-light font-size-18 m-0">{singleMovie?.Language}</p>
              </div>

              <div className="mt-3">
                <p className="text-gray m-0 fs-5">Runtime</p>
                <p className="text-light font-size-18 m-0">{singleMovie?.Runtime}</p>
              </div>
            </div>
          </>
        ) : (
          // ✅ Show error if movie not found
          <h2 className="text-danger text-center my-5">No Movie Found</h2>
        )}
      </div>
    </div>
  );
};

export default Single;
