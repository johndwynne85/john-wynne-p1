import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MovieCard } from './MovieCard';
import { Watched } from './Watched';

export const Watchlist = () => {
  const {watchlist} = useContext (GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading"> My Movie Pile</h1>
          <span className='count-pill'>
          {watchlist.length} {watchlist.length === 1 ? 'Movie On Pile': "Movies On Pile"} 
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
