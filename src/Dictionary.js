import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log();
        setResults(response.data);
    }

    function search(){
         let apiKey = "e48bbeefa4cbc305ad9334597oa8t957";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);  
    }


    function handleSubmit(event){
        event.preventDefault();
        search();
    }


function handleKeywordChange(event){
    setKeyword(event.target.value);
}
function load() {
    setLoaded(true);
    search();
}
if (loaded){
    return (
    <div className="Dictionary">
      
        <form onSubmit={handleSubmit}>
            <input className="Search" type="search" placeholder="Search"  onChange={handleKeywordChange}/>
            </form>
          
            <Results results={results} />
             
            </div>
    );
} else{
load();
return  "Loading..." ;
}
   
}