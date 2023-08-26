import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult/SearchResult";

 export const BASE_URL='http://localhost:9000'

function App() {
  const[data,setData]=useState(null);
const[loading,setLoading]=useState(false)  
const[error,setError]=useState(null)
const[filterdData,setFilterdData]=useState(null)
const[selectedButton,setSelectedButton]=useState("all")

 useEffect(()=>{

  const FetchCodeData= async()=>{
    // setLoading(true)
    try {
      const response=await fetch(BASE_URL);
    
    const json= await response.json();
    setData(json)
    setFilterdData(json)
    // setLoading(false)
    
    
    } catch (error) {
      setError("unable to fetch data")
    }
    
    
    }
    FetchCodeData()

 },[])

const searchFood=(e)=>{
const searchValue=e.target.value;

if(searchValue ===''){
  setFilterdData(null)
}

const filter= data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase())
);

setFilterdData(filter)
}

const filterFood=(type)=>{
if(type==="all"){
  setFilterdData(data );
  setSelectedButton('all');
  return;
}
const filter= data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase())
);
setFilterdData(filter)
setSelectedButton(type)
}


// FetchCodeData();
if(error) return <div>{error}</div>
if(loading) return <div>Loading...</div>;


  return (
<>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="Images/foody2.png" alt="logo" />
        </div>
        <div className="search">
          <input onChange={searchFood} type="text" placeholder="Search food " />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button
        onClick={()=>filterFood('all')}
        >All</Button>
        <Button  onClick={()=>filterFood('breakfast')}>Breakfast</Button>
        <Button  onClick={()=>filterFood('lunch')}>Lunch</Button>
        <Button   onClick={()=>filterFood('dinner')}>Dinner</Button>
      </FilterContainer>

   
    
    </Container>
       <SearchResult data={filterdData}/>
       </>
  );
}

export default App;

 export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  display: flex;
  height: 140px;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      border-radius: 5px;
      color: white;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }

  @media(0< width< 600px){
    flex-direction: column;
    height:120px;
  }


`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 48px;
`;

 export const Button = styled.button`
  background: red;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
background-color: #c16f6f;
  }
`;


