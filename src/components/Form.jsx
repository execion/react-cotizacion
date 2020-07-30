import React, { useState } from 'react'
import styled from "@emotion/styled";
import PropTypes from 'prop-types';
import { getDifferentYear, calculateMark, getPlan } from '../helper';

const Field = styled.div `
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;

const Button = styled.button `
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 1rem;

    &:hover {
        background-color: #26c6da;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-top: -.8rem;
    margin-bottom: .8rem;
`;

const Form = ({ setResume, setLoad }) => {
    const [ dates, setDates ] = useState({
        mark: '',
        year: '',
        plan: 'basic'
    });

    const [ error, setError ] = useState(false);

    const { mark, year, plan } = dates;

    const getInformation = e => {
        setDates({
            ...dates,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(
            mark.trim() === "" ||
            year.trim() === "" ||
            plan.trim() === ""
        ) {
            setError(true);
            return;
        }

        setError(false);

        let result = 2000;

        const different = getDifferentYear(year);

        result -= ((different * 3) * result) / 100;

        result = calculateMark(mark) * result;

        const incrementPlan = getPlan(plan);

        result = parseFloat(incrementPlan * result).toFixed(2);

        setLoad(true);

        setTimeout(() => {
            setLoad(false);
            setResume({
                quotation: Number(result),
                dates
            });
        }, 1000);

    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error>Todos los campos son obligatorios</Error> : null }
            <Field>
                <Label>Marca</Label>
                <Select
                    name="mark"
                    value={mark}
                    onChange={getInformation}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="american">Americano</option>
                    <option value="european">Europeo</option>
                    <option value="asian">Asiático</option>
                </Select>
            </Field>

            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getInformation}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                <Select
                    name="plan"
                    value={plan}
                    onChange={getInformation}
                >
                    <option value="basic">Básico</option>
                    <option value="complete">Completo</option>
                </Select>
            </Field>

            <Button type="submit">Cotizar</Button>
        </form>
    );
}
Form.propTypes = {
    setLoad: PropTypes.func.isRequired,
    setResume: PropTypes.func.isRequired
}

export default Form;