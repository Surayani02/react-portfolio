import React from 'react';
import styled from "styled-components";

import Nav from "../components/navigation/Nav";

function Header() {
    return (
        <Wrapper>
            <Nav/>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.header`

`;