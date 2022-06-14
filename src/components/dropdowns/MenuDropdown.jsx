import React from 'react';
import styled from "styled-components";

import {menuData} from "../../utility/menuData";
import NavItem from "../navigation/NavItem";

function MenuDropdown(props) {
    const {isOpen} = props;

    return (
        <Wrapper isOpen={isOpen}>
            {menuData.map((item, index) => (
                <NavItem item={item} key={index}/>
            ))}
        </Wrapper>
    );
}

export default MenuDropdown;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem 2.5rem;
  gap: 1rem;
  position: absolute;
  z-index: 1;
  right: 60px;
  top: 80px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.25), inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  visibility: ${props => props.isOpen ? "visible" : "hidden"};
  transform: ${props => props.isOpen ? "skewY(0deg) rotate(0deg) translateY(0px)" : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
  transition: 0.3s ease-in-out;
`;