import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
function Recipe() {
  const [recipe,setRecipe]=useState({})
  const params=useParams();

  const appel=async ()=>{
    try{
      let response=await fetch(`https://api.spoonacular.com/recipes/${params.recipe}/information?apiKey=28f2fb3ec5e14d2cbf98e1af3b63603e`)
      let data=await response.json();
      setRecipe(data)
      console.log(data)

    }
    catch(err){
      console.log("erreur")
    }
   
  }
  useEffect(()=>{
    appel()
  },[])
  return (
    <Element>
      <img src={recipe.image} alt={recipe.id} />
      
         <h4 dangerouslySetInnerHTML={{__html:recipe.summary}} />
         <div>
         <h2>Instuctions</h2>
         </div>
         <h4 dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
     
    </Element>
  )
}
const Element=styled.div`
display:grid;
grid-template-columns:auto 2fr;
@media screen and (max-width:992px){
  grid-template-columns: 1fr;
  gap:10px;
}
div{
  display:flex;
    justify-content:center;
    align-items:center;
  h2{
    text-align:center;
    

  }
}
img{
  width:auto;
  max-width:80%;
  border-radius:20px;
  margin:auto;

}
`

export default Recipe;
