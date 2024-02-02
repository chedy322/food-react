import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";

function Veggie() {
  const [veggies, setveggies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appel2();
  }, []);

  const appel2 = async () => {
    try {
      const check = localStorage.getItem("veggies");

      if (check) {
        setveggies(JSON.parse(check));
        setLoading(false); // Set loading to false once the recipes are loaded
      } else {
     
        const api = await fetch(
          'https://api.spoonacular.com/recipes/random?apiKey=28f2fb3ec5e14d2cbf98e1af3b63603e&number=9&tags=vegetarian'
        );
        
        const data = await api.json();
        
        setveggies(data.recipes);
        localStorage.setItem("veggies", JSON.stringify(data.recipes));
        console.log(data)
        setLoading(false); // Set loading to false once the recipes are loaded

      
    }}catch (error) {
      console.error("Error:", error);
      // Handle error as needed
      setLoading(false); // Set loading to false in case of an error
    }
  };

  if (loading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or message
  }

  return (
    <div>
      <Wrapper>
        <h1><em>Veggie Picks</em></h1>
        <Splide options={{
          drag: 'free',
          arrows: false,
          pagination: false,
          perPage: 4,
          gap: '6rem',
        }}>
          {veggies.map(rec => (
            <SplideSlide key={rec.id}>
              <Card>
                <img src={rec.image} alt={rec.title}/>
                <Link to={'/recipe/'+rec.id}>
                  <p>{rec.title}</p>
                </Link>
              </Card>
            </SplideSlide>
          ))}
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

export default Veggie
