import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContainerForm = styled.div`
    background-color: #FFFFFF;
    padding: 3rem;
`;

function App() {

    const [ resume, setResume ] = useState({
        quotation: 0,
        dates: {
            mark: "",
            year: "",
            plan: ""
        }
    });

    const [ load, setLoad ] = useState(false);

    const { quotation, dates } = resume;

    return (
        <Container>
            <Header 
            title = "Cotizador de Seguros"
        />
            <ContainerForm>
                <Form 
                    setResume = { setResume }
                    setLoad = { setLoad }
                />

                { load ?
                    <Spinner /> 
                    :
                    null
                }

                <Resume 
                    dates = { dates }
                />

                { !load ?
                    <Result 
                        quotation={quotation} 
                    />
                    :
                    null
                }
            </ContainerForm>
        </Container>
    );
}

export default App;
