import './Text2Music.css';

function Text2Music() {
    return(
        <div className="flex-container"> 
            <h2> hi :) </h2>
            <div className="text-container">
                <textarea rows="20" cols="80" className="text"></textarea>
            </div>
            <button className="next-button">submit!</button>
        </div>
    );
}

export default Text2Music;