import React from "react";
import { Typography } from "@mui/material";
import PriceCard from "./PriceCard.js";


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



function Prices()
{
    return(
        <>
        <div className="d-flex justify-content-center ">
        <Typography variant='h3' color='black' >Packages</Typography>  
        </div>
        <div className="row ">
        
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