import React, { useState } from "react";
import { Typography } from "@mui/material";
import PriceCard from "./priceCard";


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
        <div className="bg-info-subtle d-flex justify-content-center ">
        <Typography variant='h3' color='black' paddingLeft={4} >Packages</Typography>  
        </div>
        <div className="row ">
        
        <PriceCard plan={pricingData.plan} price={pricingData.price}/>


        </div>
        
        </>
    )
}

export default Prices;