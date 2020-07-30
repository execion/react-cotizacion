import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ContainerHeader = styled.header`
    background-color: rgb(70, 170, 170);
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
    margin-top: .3rem;
`;

const TextHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: "Slabo 27px", serif;
    padding: .5rem 0;
    text-align: center;
`;
const Header = ({title}) => {

    return (
        <ContainerHeader>
            <TextHeader>{title}</TextHeader>
        </ContainerHeader>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;