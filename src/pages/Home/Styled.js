import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    aligh-items: center;
    justify-content: center;
    height: 100vh;
`

export const Container = styled.div`
    width: 100vw;
    display: flex;
    aligh-items: center;
    justify-content: center;
`

export const Input = styled.input `
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outlne: none;
        box-shadow: none;
    }
`

export const Button = styled.button`
    height: 25px;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
`

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`