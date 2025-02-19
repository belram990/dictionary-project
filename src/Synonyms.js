import React from "react";

import "./Meaning.css";

export default function Synonyms (props){
    
    if (props.synonyms) {
     return(
       <span className="Synonyms">
        <strong>Synonyms:</strong>
        {" "}
        
        {props.synonyms.map(function (synonym, index){
            return <li key={index}>{synonym}</li>;
        })}
        </span>
      
       );
    } else {
        return null;
    }
    
   
}
