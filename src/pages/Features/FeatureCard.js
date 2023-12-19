import React from "react";
import { Box, Card, CardContent, CardActions, Button, Typography, CardMedia } from "@mui/material";


function FeatureCard(props)
{
    // const image='https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXIlMjBjb2RlfGVufDB8fDB8fHww';

    const image = props.image;
    const title = props.title;
    const description = props.description;
    return(
        <div>
            <Box width='350px' marginBottom='2rem' marginTop={'2rem'}>
                <Card>
                    <CardMedia component='img' height='140' image={image}/>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component='div'>
                            {title}
                        </Typography>
                        <Typography variant="body1" color='text.secondary' padding={2} >
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Visit</Button>
                        <Button size="small">Share</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );

}

export default FeatureCard;