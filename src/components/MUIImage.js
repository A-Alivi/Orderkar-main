import { Box } from "@mui/material";
import React from "react";


const imageData= [
    {
        img: "https://plus.unsplash.com/premium_photo-1673809798817-457be4736fa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
    },
    {
        img:"https://plus.unsplash.com/premium_photo-1676690615192-32c9f3ebe3bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGluaW5nfGVufDB8fDB8fHww"
    }
    ,
    {
        img:"https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
    }
    ,
    {
        img:"https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHJlc3RhdXJhbnQlMjB3ZWJzaXRlfGVufDB8fDB8fHww"
    },
   

];

function imageDisplay(){

    return(
<>
        {
          
            imageData.map((image) =>(

                <Box
                component="img"
                sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },  
                    margin: 4
                }}
                
                alt=""
                src={`${image.img}`}
                />
                    ))
                
         }
    </>
    );

}

export default imageDisplay;
