import React, { useEffect, useState } from 'react';

function App(){
  // useEffect(function(){
  //   alert("hi");
  // }, [])
  
  return <div>
    <CardWrapper>
      <div>
        hi there
      </div>
    </CardWrapper>
    <CardWrapper>
      <button>Surprize me</button>
    </CardWrapper>
    <CardWrapper>
      <h2>hi there</h2>
      <button>Surprize me</button>
    </CardWrapper>
  </div>} 


function CardWrapper({children}){
  return <div 
    style={{border: "1px solid gray",
    padding: 10,
    marginTop: 20,
    boxShadow: "0px 5px 5px gray"
    }}>
    {children}
  </div>
}
export default App;
