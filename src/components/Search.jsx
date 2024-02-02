import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import styled from 'styled-components';
function Search() {
    const [input,setInput]=useState('');
    const navig=useNavigate();
    function handleChange(e){
        setInput(e.target.value)
        navig('searched/'+input)
    }
  return (
    <Forme>
        <NavLink to="/" className='home'>
            <FaHome></FaHome>
        </NavLink>
        <div>
            <FaSearch className='search'></FaSearch>
            <input type="text" placeholder="Search for your food here..." onChange={handleChange} value={input}/>
        </div>

    </Forme>
  )
}
const Forme= styled.form`
  width: 100%;
  height: 100%;
  color: black;
  font-size: 25px;
  position: relative;
  text-align: center;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border-radius: 3rem;
    background-color: rgba(49, 47, 48, 0.9);
    font-size: 1.2rem;
    padding: 15px;
    color: rgba(249, 247, 248, 0.49);
    border: none;
    outline: none;
    padding: 1rem 3rem;

    &::placeholder {
      color: #fff;
    }
  
  }
  .home{
    font-size:25px;
    cursor: pointer;
    color:black;
  }

  @media screen and (min-width: 992px) {
    div {
      width: 100%;

      .search {
        position: absolute;
        top: 50%;
        left: 35%;
        transform: translate(100%, -50%);
      }
    }
  }

  @media screen and (max-width: 992px) {
    div {
      width: 100%;
      .search {
        position: absolute;
        font-size: 20px;
        top: 50%;
        left: 10%;
        transform: translate(100%, -50%);
      }

      input {
        border-radius: 3rem;
        background-color: rgba(49, 47, 48, 0.9);
        font-size: 1.2rem;
        padding: 15px;
        color: rgba(249, 247, 248, 0.49);
        border: none;
        outline: none;
        padding: 1rem 3rem;

        &::placeholder {
          color: #fff;
        }
      }

      
    }
  }
`;
export default Search
