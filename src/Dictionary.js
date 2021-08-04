import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
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
            
        </div>
    );
}