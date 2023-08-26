import styled from 'styled-components'
import {BASE_URL} from '../../App'
import {Button} from '../../App'
import {Container} from '../../App'

export default function SearchResult({ data }) {
  return (
    <FoodCardContainer>
      <Container>
      <FoodCards>
        {data?.map((food ) => (
          <FoodCard key={food.name}>
<div className="food_image">
    <img src={ BASE_URL + food.image} />
</div>
<div className="food-info">
<div className="info">
    <h3>{food.name}</h3>
    <p>{food.text}</p>
</div>
<Button>${food.price.toFixed(2)}</Button>


</div>

          </FoodCard>
        ))}
      </FoodCards>
      </Container>
    </FoodCardContainer>
  );
}

const FoodCardContainer = styled.section`
  background-image: url("bg.png");
  background-size: cover;
  min-height: calc(100vh - 220px);
`;

const FoodCards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap:22px;
padding:10px;
justify-content: center;
align-items: center;


.food-info{
    display: flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:end;
}

`;

const FoodCard=styled.section`
/* width: 340px;
height: 167px; */
border: 1px solid white;
display: flex;
margin:0 auto;
width: 360px;
padding: 10px;
font-size: 15px;
flex-shrink: 0;
border-radius: 19.447px;
background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);
margin-top: 25px;



`;