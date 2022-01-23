import './Text2Music.css';
import * as Tone from 'tone'


function Text2Music(props) {
    function onTextChange(event) {
        props.setText(event.target.value);

        //create a synth and connect it to the main output (your speakers)
        const synth = new Tone.Synth().toDestination();
    
        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease("C4", "8n");
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