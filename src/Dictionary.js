import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeyword(event){
        event.preventDefault();
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="dictionary">
                <section>
                    <h1>Search for a word...</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" placeholder="eg: love, yoga, cake..." autoFocus={true} onChange={handleKeyword}/>
                    </form>
                </section>
                <Results data={results} />
            </div>
        );
    } else {
        load();
        return "loading";
    }

    
}