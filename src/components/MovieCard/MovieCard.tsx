import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import { RootState } from '../../config/store/store.ts';
import { startAddVote } from '../../config/actions/myList.ts';

import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';

import './MovieCard.scss';

type Props = {
  id: number
  title: string
  posterPath: string
  releaseDate: string
  overview: string
}

export function MovieCard({
  id, title, posterPath, releaseDate, overview,
}: Props) {
  const dispatch = useAppDispatch();

  const { myList } = useAppSelector((state: RootState) => state.myList);

  function downVote(e) {
    e.preventDefault();
    dispatch(startAddVote({
      id, title, posterPath, releaseDate, overview, votation: -1,
    }));
  }

  function upVote(e) {
    e.preventDefault();
    dispatch(startAddVote({
      id, title, posterPath, releaseDate, overview, votation: 1,
    }));
  }

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
              <div>
                <button type="button" className="btn btn-warning me-16" onClick={downVote}>
                  <FontAwesomeIcon icon={faThumbsDown} />

                  {myList.filter(
                    (movie) => movie.id === id && movie.votation === -1,
                  ).map((movie) => (
                    <span key={`voto_${movie.id}`}> No me gusta</span>
                  ))}
                </button>
                <button type="button" className="btn btn-success" onClick={upVote}>
                  <FontAwesomeIcon icon={faThumbsUp} />

                  {myList.filter(
                    (movie) => movie.id === id && movie.votation === 1,
                  ).map((movie) => (
                    <span key={`voto_${movie.id}`}> Me gusta</span>
                  ))}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
