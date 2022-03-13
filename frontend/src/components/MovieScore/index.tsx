import MovieStars from "components/MovieStars"
import './styles.css';


type Props = {
    score: number;
    count: number;
}

function MovieScore({ score, count } : Props) {
    return (
        <div className="jfmovie-score-container">
            <p className="jfmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score} />
            <p className="jfmovie-score-count">{count} avaliações</p>
        </div>
    )
}
export default MovieScore;