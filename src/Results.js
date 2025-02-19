import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";


import "./Dictionary.css";

export default function Results(props){
    if (props.results) {
     return(
        <div className="Results">
            <section>
<h2 className="text-capitalize">{props.results.word}</h2>
        <small>
            <Phonetic phonetic={props.results.phonetic} />
            </small></section>

<div>
{props.results.meanings.map(function(meaning, index){
    return (
        <section key={index}>
            <Meaning meaning={meaning} />
            </section>
           
    );
})}
</div> 

  </div>
    );  
     
    } else {
        return null;
    }
    
}