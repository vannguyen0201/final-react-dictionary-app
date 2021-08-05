import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
    return (
        <div className="phonetics">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                Listen
            </a>
            {props.phonetic.text}
        </div>
    );
}