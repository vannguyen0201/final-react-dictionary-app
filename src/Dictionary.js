import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null)

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f9170000100000183ef9d939d444896a454ddb2a2f6a38d";
        let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        axios.get(pexelsApiUrl, {
            headers: {"Authorization" : `Bearer ${pexelsApiKey}`},
        }).then(handlePexelsResponse);
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
                <Photos photos={photos} />  
                <Results data={results} />
            </div>
        );
    } else {
        load();
        return "loading";
    }

    
}