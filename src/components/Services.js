import { Typography } from '@mui/material';
import React from 'react';
import CardMUI from './Card';



const cardsData =[
  {
    id:1,
    cardImageLink:'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHx3ZWJzaXRlfGVufDB8fDB8fHww',
    cardTitle:'Web App',
    cardDescription :'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
  },
  {
    cardImageLink:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww',
    cardTitle:'Mobile App',
    cardDescription :'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'

  },

  {
    cardImageLink:'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5hbHl0aWNzfGVufDB8fDB8fHww',
    cardTitle:'Restaurant Analytics',
    cardDescription :'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
   
  },
  {
    cardImageLink:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww',
    cardTitle:'Mobile App',
    cardDescription :'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
   
  }
];



  function mapCardsData(data){

    return(
      <>

      {
        data.map((data)=>(
          <div className="col col-md-6 col-sm-6 col-lg-4 d-flex justify-content-center ">
            <CardMUI cardImageLink={`${data.cardImageLink}`}  cardTitle={`${data.cardTitle}`} cardDescription={`${data.cardDescription}`}/>
          </div>
        ))
      }
     
      </>
      
    );

  }

  
  
  
  
  



const Services = () => {
  

  return (
    
  <div className="row">
     <div className="col-lg-12 col-md-12 col-sm-12 w-100" style={{height:100}}>
        <Typography variant='h3' color='black' paddingLeft={4} >Our Services</Typography>  
    </div>
  <div className="row">
      {
      mapCardsData(cardsData)
      }
  </div>
  </div>
  );
}
 export default Services;

