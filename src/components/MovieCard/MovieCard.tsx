import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './MovieCard.scss';

type Props = {
  title: string
  posterPath: string
  releaseDate: string
  overview: string
}

export function MovieCard({
  title, posterPath, releaseDate, overview,
}: Props) {
  return (
    <div className="col-12 col-lg-6 mb-32 movie">
      <div className="card">
        <div className="row g-lg-0">
          <div className="col-12 col-sm-6 col-lg-5 col-xl-4">
            <div className="image-container bg-gray">
              {posterPath && <LazyLoadImage src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${posterPath}`} className="img-fluid img-cover" alt={title} />}

            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-7 col-xl-8">
            <div className="card-body text-start">
              <h5 className="card-title">{title}</h5>
              <p className="card-text text-muted">{releaseDate}</p>
              <p className="card-text">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
