import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data);
    }

function handleImageResponse(response){
    setPhotos(response.data.photos);
}


    function search(){
         let apiKey = "e48bbeefa4cbc305ad9334597oa8t957";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleDictionaryResponse);  

    let imageApiKey = "e48bbeefa4cbc305ad9334597oa8t957";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
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
            <Photos photos={photos} /> 
            </div>
    );
} else{
load();
return  "Loading..." ;
}
   
}