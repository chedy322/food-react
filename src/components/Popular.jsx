import { useEffect, useState } from "react"
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'

function Popular() {
const [recipes,setRecipes]=useState([])
useEffect(()=>{
    appel()
   
},[])

const appel= async () => {
    try {
      const check = localStorage.getItem("popular");
  
      if (check) {
        setRecipes(JSON.parse(check));
      } else {
        const api = await fetch(
          'https://api.spoonacular.com/recipes/random?apiKey=28f2fb3ec5e14d2cbf98e1af3b63603e&number=9'
        );
  
        const data = await api.json();
  
        setRecipes(data.recipes);
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        }
    } catch (error) {
      console.error("Error:", error);
      // Handle error as needed
    }
  };
return (
  <div>
   
        <Wrapper >
        <h1><em>Popular Picks</em></h1>
        <Splide options={ {
    drag:'free',
    arrows:false,
    pagination:false,
    perPage:4,
    gap: '6rem',
  } }>
      {
        
        recipes.map(rec => (
            <SplideSlide key={rec.id}>
            <Card>
                <img src={rec.image} alt={rec.id} />
                <Link to={"recipe/"+rec.id}>
                  <p>{rec.title}</p>
                </Link>

            </Card>
            </SplideSlide>
            
        ))
       
      }
      </Splide>
      </Wrapper>
      </div>
    
  );
}
const Wrapper=styled.div`
margin:4rem 0rem;
`
const Card=styled.div`
position:relative;
overflow:hidden;


p{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background for text */
  color: white; /* Text color */
  padding: 0.5rem;
  margin: 0;
  border-bottom-left-radius: 8px; /* Optional: Add rounded corners to the text box */
  border-bottom-right-radius: 8px; /* Optional: Add rounded corners to the text box */
  text-align:center;
  font-family: 'Roboto', sans-serif;
  
    
}
img{
    border-radius:2rem;
    width:100%;
    object-fit: cover;
    height:100%;
  
}
@media screen and (max-width:900px){
  width:120px;
  height:200px;
  max-height:auto;
}
`

export default Popular
