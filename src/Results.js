import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props){
    if (props.data) {
        return (
            <div className="results">
                <section>
                    <h2>{props.data.word}</h2>
                    {props.data.phonetics.map(function(phonetic, index) {
                        return(
                            <div key={index}>
                                <Phonetics phonetic={phonetic} />
                            </div>
                        )
                    })}
                </section>
                {props.data.meanings.map(function(meaning, index) {
                    return (
                        <section key={index}> 
                            <Meaning meaning={meaning} />
                        </section>
                    )
                })}
            </div>
        );
    } else {
        return null;
    }
}