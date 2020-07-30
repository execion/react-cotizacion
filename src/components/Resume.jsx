import React from 'react'
import styled from '@emotion/styled';
import { capitalLetter } from '../helper';
import PropTypes from 'prop-types';

const ContainerResume = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;

    &>ul {
        padding: 0;
    }
`;


const Resume = ({ dates }) => {

    const { mark, year, plan } = dates;

    if(
        mark === "" ||
        year === "" ||
        plan === ""
    ) return null;

    return (
        <ContainerResume> 
            <h2>Resumen de cotización</h2>

            <ul>
                <li>Marca: { capitalLetter(mark) }</li>
                <li>Plan: { capitalLetter(plan) }</li>
                <li>Año del auto: { capitalLetter(year) }</li>
            </ul>
        </ContainerResume>
    );
}

Resume.propTypes = {
    dates: PropTypes.object.isRequired
}

export default Resume;