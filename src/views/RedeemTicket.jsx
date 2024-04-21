import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PageHeader from "../components/PageHeader";
import FormContainer from "../components/FormContainer";
import InputWithError from "../components/InputWithError";
import CoolButton from "../components/CoolButton";
import CenterDiv from "../components/CenterDiv";


// TODO: Validar con Backend
const RedeemTicket = () => {
    const [eventCode, setEventCode] = useState('')
    const [eventCodeError, setEventCodeError] = useState('')
    const navigate = useNavigate();

    const errorList = {
        eventCodeEmpty : 'El código no puede estar vacío'
    }

    const handleEventCodeChange = (event) => {
        const newEventCode = event.target.value;
        setEventCode(newEventCode)

        const isEmpty = !validateField(newEventCode);
        
        if(isEmpty){
            setEventCodeError(errorList.eventCodeEmpty)
        } else {
            setEventCodeError('')
        }
    }

    const handleRedeem = () => {
        const isValidField = validateField(eventCode)

        if(isValidField){
            // TODO: Utilizar info de Backend
            setEventCodeError('')
            console.log('Canjeando')
            navigate('/ticket-redeemed')
        } else {
            setEventCodeError(errorList.eventCodeEmpty)
        }
    }

    const validateField = (value) => {
        // No vacío
        return value.trim() !== '';
    };

    return (
        <>
            <PageHeader h1='Canjear Ticket' h4='Ingresa tu código de ticket' />
            <CenterDiv>
                <FormContainer extraClasses='widerCard'>
                    <InputWithError
                        type='text'
                        label='Ingresa el código de tu evento'
                        id='eventCode'
                        value={eventCode}
                        error={eventCodeError}
                        onChange={handleEventCodeChange}
                    />
                    <CenterDiv>
                        <CoolButton text='Canjear' onClickFunction={handleRedeem}/>
                    </CenterDiv>
                </FormContainer>
            </CenterDiv>
        </>
    );
};

export default RedeemTicket;