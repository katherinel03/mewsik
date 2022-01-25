import './Text2Music.css';
import * as Tone from 'tone'

function Text2Music(props) {
    function onTextChange(event) {
        props.setText(event.target.value);
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");
    }

    function onInstSelect(event) {
        props.setInst(event.target.value);
    }

    let instrumentOptions = props.instrumentList.map((instrumentName) => {
        return <option value={instrumentName}>{instrumentName}</option>
    });
    
    return(
        <div className="flex-container"> 
            <h2> hi :) </h2>
            <div className="text-container">
                <textarea rows="20" cols="80" className="text" value={props.text} onChange={onTextChange}></textarea>
            </div>
            <select value={props.inst} onChange={onInstSelect}>
                {instrumentOptions}
            </select>
                
            <button onClick={props.onSubmitClick} className="next-button">submit!</button>
        </div>
    );
}

export default Text2Music;