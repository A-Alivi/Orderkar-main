import React from "react";
import FeatureCard from "./FeatureCard";
import { Typography } from "@mui/material";


const featureData=[
    {
        id:1,
        image:'https://images.unsplash.com/photo-1595079836075-96bdbbf859d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cXIlMjBjb2RlJTIwcGF5bWVudHN8ZW58MHx8MHx8fDA%3D',
        title:"QR Payments",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quo.'
    },
    {
        id:2,
        image:'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFJfGVufDB8fDB8fHww',
        title:"AI Engines",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quo.'
    },
    {
        id:3,
        image:'https://images.unsplash.com/photo-1614267119077-51bdcbf9f77a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF5bWVudCUyMG1ldGhvZHxlbnwwfHwwfHx8MA%3D%3D',
        title:"Multiple Payment Options",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quo.'
    }
]

function mapFeature()
{
    return(
        <>
        {
            
                featureData.map((data)=>(
                
                    
                        
                            <div className="d-flex justify-content-center col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <FeatureCard image={data.image} title={data.title} description={data.description}/>
                            </div>     
                    
                   
                ))
            
        }
        </>
    );
}

function Features()
{

    return(
        <>
        <section className=" bg-body-secondary py-2">
            <div className="row px-5 py-2">
                <Typography variant="h3" > Features</Typography>
            </div>
            <div className="row ">
                {
                    mapFeature()
                }
            </div>
        </section>
        </>
    );
}

export default Features;    