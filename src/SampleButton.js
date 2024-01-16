import React from "react";

const SampleButton = ({ name, loadFile, transparent }) => {
  return(
    <input className='sampleButton' type='button' value={name} onClick={loadFile} style={ transparent ? {'opacity': '.5'} : {}}/>
  )
}

export default SampleButton
