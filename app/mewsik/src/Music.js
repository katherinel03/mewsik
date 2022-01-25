import './Music.css';
import React, { useEffect } from 'react';

import * as Tone from 'tone'

function Music(props) {
    const dict = {
        "a": "C4",
        "b": "C#4",
        "c": "D4",
        "d": "D#4",
        "e": "E4",
        "f": "F4",
        "g": "F#4",
        "h": "G4",
        "i": "G#4",
        "j": "A4",
        "k": "A#4",
        "l": "B4",
        "m": "C5",
        "n": "C#5",
        "o": "D5",
        "p": "D#5",
        "q": "E5",
        "r": "F5",
        "s": "F#5",
        "t": "G5",
        "u": "G#5",
        "v": "A5",
        "w": "A#5",
        "x": "B5",
        "y": "C6",
        "z": "C#6",
        "1": "D3",
        "2": "D#3",
        "3": "E3",
        "4": "F3",
        "5": "F#3",
        "6": "G3",
        "7": "G#3",
        "8": "A3",
        "9": "A#3",
        "0": "B3",
    }

    function convert(char) {
        if (!(char.toLowerCase() in dict)) {
            return "D6";
        }
        return dict[char.toLowerCase()];
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(async () => {
        let synth;
        if (props.inst == "amsynth") {
            synth = new Tone.AMSynth().toDestination();
        }
        else if (props.inst == "fmsynth") {
            synth = new Tone.FMSynth().toDestination();
        }
        else if (props.inst == "membranesynth") {
            synth = new Tone.MembraneSynth().toDestination();
        }
        else if (props.inst == "monosynth") {
            synth = new Tone.MonoSynth().toDestination();
        }
        else if (props.inst == "polysynth") {
            synth = new Tone.PolySynth().toDestination();
        }
        else {
            synth = new Tone.Synth().toDestination();
        }
        for (let index = 0; index < props.text.length; index++) {
            const element = props.text[index];
            const note = convert(element);
            synth.triggerAttackRelease(note, "16n");

            await sleep(100);
        }
    }, []);    

    return(
        <div>
            <h2> hi :D </h2>
            {props.text}
            <button onClick={props.onBackClick} className='back-button'>back</button>
        </div>
    );
}

export default Music