import './Music.css';

import * as Tone from 'tone'

function Music(props) {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");

    return(
        <div>
            <h2> hi :D </h2>
            {props.text}
            <button onClick={props.onBackClick} className='back-button'>back</button>
        </div>
    );
}

export default Music