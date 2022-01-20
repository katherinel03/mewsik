import './Music.css';

function Music(props) {
    return(
        <div>
            <h2> hi :D </h2>
            {props.text}
            <button onClick={props.onBackClick} className='back-button'>back</button>
        </div>
    );
}

export default Music