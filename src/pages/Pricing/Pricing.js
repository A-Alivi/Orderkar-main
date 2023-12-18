import React from "react";
import { Typography } from "@mui/material";
import PriceCard from "./PriceCard.js";


const pricingData=[
    {
        plan:'2 Year Plan',
        price:'$20'
    },
    {
        plan:'1 Year Plan',
        price:'$30'
    },
    {
        plan:'Monthly Plan',
        price:'$50'
    }
]



function Prices()
{
    return(
        <>
        <div className="d-flex justify-content-center bg-body-secondary  ">
        <Typography variant='h3' color='black' >Packages</Typography>  
        </div>
        <div className="row" style={{backgroundColor:'rgb(238, 243, 250)'}}>
        
        {
            pricingData.map((pricingData)=>
            {
                return(
                    <>
                        <PriceCard  plan={pricingData.plan} price={pricingData.price}/>          
                    </>
                )

            })
        }


        </div>
        
        </>
    )
}

export default Prices;