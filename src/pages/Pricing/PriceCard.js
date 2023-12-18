import React from "react";

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
                            <button type="label" class="btn btn-warning text-center">Warning</button>
                            <h3 class="card-subtitle fw-bold  text-center py-2 ">{price}</h3>
                            <p class="card-text">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>    
                            </ul></p>
                            
                            <button type="button" class="btn btn-lg-block bg-success w-100 fs-3 fw-bold ">Select</button>                        </div>
                    </div> 
                    </div>      
        </>
    )
}
export default PriceCard;