import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }


    function wordSearch(event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeyword(event){
        event.preventDefault();
        setKeyword(event.target.value);
    }

    return (
        <div className="dictionary">
            <h1>Search for a word...</h1>
            <form onSubmit={wordSearch}>
                <input type="search" autoFocus={true} onChange={handleKeyword}/>
            </form>
            <Results data={results} />
        </div>
    );
}