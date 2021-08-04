import { tSObjectKeyword } from "@babel/types";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);

    function wordSearch(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }

    function handleKeyword(event){
        event.preventDefault();
        setKeyword(event.target.value);
    }

    return (
        <div className="dictionary">
            <form onSubmit={wordSearch}>
                <input type="search" autoFocus={true} onChange={handleKeyword}/>
            </form>
        </div>
    );
}