import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./afterLoginHome.css";

const AfterLoginHome = () => {
  const API_KEY = "10ed3445";
  const [trending, setTrending] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [drama, setDrama] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async (query, setter) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`
      );
      const data = await res.json();
      setter(data.Response === "True" ? data.Search : []);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchMovies("star", setTrending);
    fetchMovies("comedy", setComedy);
    fetchMovies("drama", setDrama);
  }, []);

  const Row = ({ title, movies }) => {
    const rowRef = useRef(null);

    const scroll = (dir) => {
      if (rowRef.current) {
        rowRef.current.scrollBy({
          left: dir === "left" ? -400 : 400,
          behavior: "smooth",
        });
      }
    };

    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row-container">
          <button className="scroll-btn left" onClick={() => scroll("left")}>
            &#10094;
          </button>
          <div className="row-posters" ref={rowRef}>
            {movies.map((movie, i) => (
              <motion.div
                className="poster-card"
                key={movie.imdbID}
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/200x300?text=No+Image"
                  }
                  alt={movie.Title}
                />

                <div className="hover-overlay">
                  <div className="hover-buttons">
                    <button className="play-btn">▶</button>
                    <button className="circle-btn">+</button>
                    <button
                      className="circle-btn"
                      onClick={() => setSelectedMovie(movie)}
                    >
                      ℹ
                    </button>
                  </div>
                  <div className="hover-info">
                    <p>{movie.Title}</p>
                    <span>{movie.Year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scroll("right")}>
            &#10095;
          </button>
        </div>
      </div>
    );
  };

  return (
    <div id="afterLoginPage">

      <header className="mainNavbar">
        <div className="logo">NETFLIX</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">TV Shows</a></li>
          <li><a href="/">Movies</a></li>
          <li><a href="/">New & Popular</a></li>
          <li><a href="/">My List</a></li>
        </ul>
        <div className="nav-icons">
          <img src="./images/search.png" alt="Search" />
          <img src="./images/notification.png" alt="Notifications" />
          <img src="./images/user.png" alt="User" />
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {trending[0]?.Title || "Stranger Things"}
          </motion.h1>
          <div className="mid-info">
            <span className="span-one">TV-14</span>
            <span>{trending[0]?.Year || "2024"}</span>
            <span className="span-two">HD</span>
          </div>
          <p>
            {trending[0]
              ? `Movie: ${trending[0].Title} released in ${trending[0].Year}.`
              : "A thrilling story with supernatural mysteries and secrets."}
          </p>
          <div className="buttons">
            <button className="childButton1">
              <img src="./images/play-button-arrowhead.png" alt="Play" /> Play
            </button>
            <button
              className="childButton2"
              onClick={() => setSelectedMovie(trending[0])}
            >
              <img src="./images/information-24px.png" alt="Info" /> More Info
            </button>
          </div>
        </div>
      </section>

      <div className="home">
        <Row title="Continue Watching" movies={trending} />
        <Row title="New Releases" movies={comedy} />
        <Row title="Popular on Netflix" movies={drama} />
      </div>

      {selectedMovie && (
        <div className="modal-overlay">
          <div className="modal">
            <img
              src={
                selectedMovie.Poster !== "N/A"
                  ? selectedMovie.Poster
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={selectedMovie.Title}
            />
            <div className="modal-info">
              <h2>{selectedMovie.Title}</h2>
              <p>Year: {selectedMovie.Year}</p>
              <p>Type: {selectedMovie.Type}</p>
              <button
                className="modal-close"
                onClick={() => setSelectedMovie(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AfterLoginHome;
