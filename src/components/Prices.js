
import React from "react";
import { Typography } from "@mui/material";

function priceCard()
{
    return(
        <>
            <div class="card" style={{width:'18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </>
    );
}

function Prices()
{
    return(
        <>
        <div className="row bg-info-subtle ">
        <Typography variant='h3' color='black' paddingLeft={4} >Packages</Typography>  
        </div>
        <div className="row ">
            <div className="col-4 bg-transparent d-flex justify-content-center ">
                {
                    priceCard()
                }
            </div>
            <div className="col-4 bg-danger">2</div>
            <div className="col-4 bg-danger-subtle">3</div>
        </div>
        
        </>
    );
}

export default Prices;