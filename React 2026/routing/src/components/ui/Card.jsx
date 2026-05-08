function Card({currMovie}){
    return(
        <div className="card">
            <img src={currMovie.Poster} alt="" />
            <h1>{currMovie.Title}</h1>
            <h2>{currMovie.Year}</h2>
            <button>Watch Now</button>
        </div>
    )
}

export default Card