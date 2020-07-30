import React from 'react'
import './Spinner.css';
import styled from '@emotion/styled';

const ContainerSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    margin-top: 1rem;
`;

const Spinner = () => {
    return (
        <ContainerSpinner>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </ContainerSpinner>
    );
}

export default Spinner;