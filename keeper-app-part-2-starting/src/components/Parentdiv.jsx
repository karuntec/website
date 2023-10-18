import React from "react";

import Subdiv from "./Subdiv";

function Parentdiv(){
    return (
        <>
        <h1 align="center">Our Specialty Chemical Chemistry</h1><br></br>
        <p className="text-center">Innovation adds to our ability to offer a diversified product portfolio </p><br></br>
        
        <div class="maincon">
            <Subdiv 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9tIdyJ5t96vIemh7bxDaFabcgOD6ersbcUM6TfRk8F01n3BSuEF4lgP_bnbGMGlGFIk&usqp=CAU"
                text="Lorem epsum"
            />
            <Subdiv 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSFxEDoMwNsMZ1sCqa5C0TSrr197PBCC7xcO_sfscpwyh7B1OPLgpL3Y8Ue0lOmy00Yk&usqp=CAU"
                text="Lorem epsum"
            />
            <Subdiv 
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAom3VDCwtArXz-wu2wbq559X86Q5EVEmXS5jGgVgKuVD3adZOdSPDcRIKM7CkGupoap0&usqp=CAU"
            text="Lorem epsum"
            />
    
        </div><br></br><br></br><br></br>
        
        </>
    )
}

export default Parentdiv;