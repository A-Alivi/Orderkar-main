import React from "react";
import { Button } from "@mui/material";

function PriceCard(props)
{
    const plan = props.plan;
    const price = props.price;
    
    return(
        <>
        <div className="col-12 col-sm-6 col-md-4  bg-transparent d-flex justify-content-center py-4 ">
              <div class="card " style={{width:'22rem'}}>
                        <div class="card-body">
                            <h5 class="card-title text-center">{plan}</h5>
                            <h4 class="card-subtitle fw-bold  text-center py-2">{price}</h4>
                            <p class="card-text">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>    
                            </ul></p>
                            
                            <Button variant="text" sx={{justifyContent:"center"}}> <a href="#" class="card-link">Get Started</a></Button>
                        </div>
                    </div> 
                    </div>      
        </>
    )
}
export default PriceCard;