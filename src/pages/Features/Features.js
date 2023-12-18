import React from "react";

import Card from "../Services/Card";
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
        image:'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXIlMjBjb2RlfGVufDB8fDB8fHww',
        title:"QR Payments",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quo.'
    },
    {
        id:3,
        image:'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXIlMjBjb2RlfGVufDB8fDB8fHww',
        title:"QR Payments",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quo.'
    }
]


function Features()
{

    return(
        <>
        <section className=" bg-body-secondary py-2">
            <div className=" d-flex justify-content-center">
                <Typography variant="h3" > Features</Typography>
            </div>
            <div className="row ">
                {
                    featureData.map((data)=>{
                    
                        return(
                            <>
                                <div className="d-flex justify-content-center col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <Card key={data.id}/>
                                </div>     
                            </>
                        )
                    })
                }
            </div>
        </section>
        </>
    );
}

export default Features;    