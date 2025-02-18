import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log();
        setResults(response.data);
    }
    
    function search(event){
        event.preventDefault();

    let apiKey = "e48bbeefa4cbc305ad9334597oa8t957";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    }


function handleKeywordChange(event){
    setKeyword(event.target.value);
}


    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input className="Search" type="search" placeholder="Search"  onChange={handleKeywordChange}/>
            </form>
            <Results results={results} />
            </div>
    );
}