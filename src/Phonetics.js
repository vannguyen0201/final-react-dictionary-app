import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props) {
    return (
        <div className="phonetics">
            <ReactAudioPlayer
            src={props.phonetic.audio}
            controls
            className="audio"
            />
            <p className="text">{props.phonetic.text}</p>
        </div>
    );
}