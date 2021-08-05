import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <hr />
            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p>
                            ➤ {definition.definition}
                            <br />
                            <em>{definition.example}</em>
                            <Synonyms synonyms={definition.synonyms} />
                        </p>
                    </div>
                )
            })}
        </div>
    )
}