import React from "react";


function Subdiv(params){
    return (
        <>
        <div class="container1">
        <div class="zoom-container">
            <img src={params.img} alt="Image 1" class="zoomed-image" />
            <div class="fixed-container">
                <p>{params.text}</p>
               
            </div>
        </div>
    </div>
    </>
    )
}

export default Subdiv;