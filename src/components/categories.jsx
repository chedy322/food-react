import React from 'react'
import styled from 'styled-components'
import { GiChopsticks } from "react-icons/gi";
import { GiTunisia } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function Categories() {
  return (
    <List>
        <NavLink to={'/cuisine/NorthAfrican'}>
            <GiTunisia/>
            <h4>North African</h4>

        </NavLink>
        <NavLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>

        </NavLink>
        <NavLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>

        </NavLink>
        <NavLink to={'/cuisine/Chinese'}>
            <GiChopsticks/>
            <h4>Chinese</h4>

        </NavLink>


      
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 3rem;
    height:5rem;
    margin: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
    padding: 15px;
    transition: background-color 0.3s ease, color 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  svg {
    color: #ff6347; /* Icon color */
    // font-size: 1rem;
    margin-bottom: 0.2em; /* Adjust spacing between icon and text */
  }

  a:hover {
    background-color: rgba(0, 0, 0, 1);
    color: #fff; /* Text color on hover */
  }

  a h4 {
    color: white;
    font-size: 14px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-top: 5px; /* Adjust spacing between icon and text */
  }
`;
export default Categories
