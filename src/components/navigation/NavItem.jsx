import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

import {BodyMain} from "../../styles/TextStyle";

function NavItem(props) {
    const {item} = props;

    return (
        <Link to={item.link} onClick={props.onClick}>
            <MenuItem title={item.title}>
                <MenuIcon src={item.icon} alt={item.title.toLowerCase() + " icon"}/>
                <MenuText>{item.title}</MenuText>
            </MenuItem>
        </Link>
    );
}

export default NavItem;

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: ${props => props.title ? "8px" : "0"};
  border-radius: 12px;
  transition: 0.5s ease-out;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  }
`;

const MenuIcon = styled.img`
  width: 100%;
`;

const MenuText = styled(BodyMain)`
  color: rgb(255, 255, 255);
`;