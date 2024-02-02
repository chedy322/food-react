import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import styled from 'styled-components';
function Searched() {
  const [search,setSearch]=useState([])
  const params=useParams();

  const appel=async (name)=>{
    try{
      let response=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=28f2fb3ec5e14d2cbf98e1af3b63603e&number=9&tags=vegetarian&query=${name}`)
      let data=await response.json();
      setSearch(data.recipes)
      console.log(data.recipes)

    }
    catch(err){
      console.log("erreur")
    }
   
  }
  useEffect(()=>{
    appel(params.search)
    console.log(params.search)
  },[params.search])
  return (
    <div>
      <Title>
        La cuisine est : {params.search}
      </Title>
      <Grid>
        {
          search.map((recette)=>{
            return(
              <Element key={recette.id}>
                <img src={recette.image} alt={recette.id} />
                <Link to={'/recipe/'+recette.id}>
                    <h3>{recette.title}</h3>
                </Link>
              </Element>

            )
          })
        }
      </Grid>

     
    </div>
  )
}
const Title=styled.h1`
text-align:center;
margin:auto;
`
const Grid=styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
gap:10px;

`
const Element=styled.div`
padding:15px;
border-radius:10px;
margin:15px 10px;
// margin-bottom:50px;
width:50%;
min-width:80%;
img{
  min-width:80%;
  max-width: 100%; 
  // height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); 
  transition: transform 0.3s ease;
}
  img:hover{
  transform: scale(1.05)
}
  a{
  color:black;
  text-decoration:none;
}
  h3{
    background-color: rgba(0, 0, 0, 0.7);
    min-height:20%;
    color: white; /* Text color */
    padding: 0.5rem;
    margin: 0;
    border-bottom-left-radius: 8px; /* Optional: Add rounded corners to the text box */
    border-bottom-right-radius: 8px; /* Optional: Add rounded corners to the text box */
    text-align:center;
    font-family: 'Roboto', sans-serif;
    
}

`
 

export default Searched;
