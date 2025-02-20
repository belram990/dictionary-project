import React from "react";
import Synonyms from "./Synonyms";


import "./Meaning.css";



export default function Meaning(props){
   
    return(
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        
        <div className="definition">
            <p>
            <strong>Definition:</strong>{" "} {props.meaning.definition}
        <br />
        <span className="example">
       
         <span>{props.meaning.example}</span>
         </span>
         </p>
         <Synonyms synonyms={props.meaning.synonyms } />
        </div>
        </div>
    );
   
}