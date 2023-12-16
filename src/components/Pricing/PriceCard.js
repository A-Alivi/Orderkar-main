import React from "react";

function PriceCard(props)
{
    const plan = props.plan;
    const price = props.price;
    
    return(
        <>
        <div className="col-4 bg-transparent d-flex justify-content-center ">
              <div class="card" style={{width:'18rem'}}>
                        <div class="card-body">
                            <h5 class="card-title text-center">{plan}</h5>
                            <h4 class="card-subtitle fw-bold  text-center py-2">{price}</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div> 
                    </div>      
        </>
    )
}
export default PriceCard;