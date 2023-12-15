import React, { useState } from "react";
import { Typography } from "@mui/material";


const pricingData=[
    {
        plan:'Basic',
        price:'$20'
    },
    {
        plan:'Standard',
        price:'$30'
    },
    {
        plan:'Premium',
        price:'$50'
    }
]



export function priceCard(props)
{
    const plan = props.plan;
    const price = props.price;
    
    return(
        <>
            
                    <div class="card" style={{width:'18rem'}}>
                        <div class="card-body">
                            <h5 class="card-title text-center">{plan}</h5>
                            <h4 class="card-subtitle fw-bold  text-center py-2">{price}</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>     
            </>
    );

    console.log(price);
    console.log(plan);
}


function Prices()
{
    return(
        <>
        <div className="bg-info-subtle d-flex justify-content-center ">
        <Typography variant='h3' color='black' paddingLeft={4}  >Packages</Typography>  
        </div>
        <div className="row ">
            <div className="col-4 bg-transparent d-flex justify-content-center ">
                {
                    pricingData.map((data)=>
                    {
                        <priceCard plan={data.plan} price={data.price}/>
                    }
                    )
                }
            </div>
            <div className="col-4 bg-danger">2</div>
            <div className="col-4 bg-danger-subtle">3</div>
        </div>
        
        </>
    );
}

export default Prices;