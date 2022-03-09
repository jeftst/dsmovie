import {ReactComponent as Arrow} from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {
    return (
        <div className="jfmovie-pagination-container">
            <div className="jfmovie-pagination-box">
                <button className="jfmovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="jfmovie-pagination-button" disabled={false} >
                    <Arrow className="jfmovie-flip-horizontal" />
                </button>
            </div>
        </div>

    );

}
export default Pagination;