import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import NavItem from "./NavItem";
import MenuDropdown from "../dropdowns/MenuDropdown";
import {images} from "../../utility/imageData";
import {menuData} from "../../utility/menuData";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        setIsOpen(!isOpen)
    }

    return (
        <Wrapper>
            <Link to="/">
                <Logo src={images.logos.siteLogo} alt="site logo"/>
            </Link>
            <MenuWrapper>
                {menuData.map((item, index) => item.link === "/toggle" ? (
                    <NavItem item={item} key={index} onClick={(event) => handleClick(event)}/>) : (
                    <NavItem item={item} key={index}/>
                ))}
                <HamburgerWrapper>
                    <NavItem item={{title: "", icon: images.icons.hamburgerIcon, link: ""}}/>
                </HamburgerWrapper>
            </MenuWrapper>
            <MenuDropdown isOpen={isOpen}/>
        </Wrapper>
    );
}

export default Nav;

const Wrapper = styled.nav`
  position: absolute;
  width: 100%;
  top: 48px;
  left: 0;
  display: flex;
  flex-direction: row;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    top: 32px;
  }

  @media (max-width: 480px) {
    top: 16px;
    padding: 0 1rem;
  }
`;

const Logo = styled.img`

`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 40px;

  @media (max-width: 960px) {
    > a {
      display: none;
    }
  }
`;

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
  }
`;

