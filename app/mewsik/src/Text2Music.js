import './Text2Music.css';

function Text2Music(props) {
    function onTextChange(event) {
        props.setText(event.target.value);
    }

    return(
        <div className="flex-container"> 
            <h2> hi :) </h2>
            <div className="text-container">
                <textarea rows="20" cols="80" className="text" value={props.text} onChange={onTextChange}></textarea>
            </div>
            <button onClick={props.onSubmitClick} className="next-button">submit!</button>
        </div>
    );
}

export default Text2Music;