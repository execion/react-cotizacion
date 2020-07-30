import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Message = styled.p`
    background-color: rgb(70, 170, 170);
    color: white;
    text-shadow: 0 0 2px black;
    padding: 1rem 0;
    margin-top: 2rem;
    text-align: center;
`;

const ResultQuotation = styled.div`
    text-align: center;
    padding: .5rem 0;
    border: 1px solid #26c6da;
    background-color: rgb(70, 170, 170);
    margin-top: 1rem;
    position: relative;
`;

const TextQuotation = styled.p`
    color: #00838f;
    padding: 1rem 0;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({quotation}) => {

    return (
        (quotation === 0) ? 
            <Message>Elige marca, año y tipo de seguro</Message>
            :
            <ResultQuotation>
                <TransitionGroup
                    component="span"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={quotation}
                        timeout={{ enter: 500, exit: 500 }}
                    >
                        <TextQuotation>Total: $<span>{quotation}</span></TextQuotation>
                    </CSSTransition>
                </TransitionGroup>
            </ResultQuotation>           
    );
}

Result.propTypes = {
    quotation: PropTypes.number.isRequired
}

export default Result;