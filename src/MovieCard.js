import React from 'react'

const MovieCard = ({obj}) => {
  return (
    <>
      <div className="movie">
            <div>
            <p>{obj.Year}</p>
            </div>
            <div>
              <img
                src={
                  obj.Poster !== "N/A"
                    ? obj.Poster
                    : "https://via.placeholder.com/400"
                }
                alt={obj.Title}
              />
            </div>
            <div>
              <span>{obj.Type}</span>
              <h3>{obj.Title}</h3>
            </div>
          </div>
          </>
  )
}

export default MovieCard
