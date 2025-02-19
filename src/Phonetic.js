import React from "react";

import "./Dictionary.css";


export default function Phonetic (props){
    return(
      <div className="Phonetic mb-4">
    /{props.phonetic}/
      </div>
    );
}