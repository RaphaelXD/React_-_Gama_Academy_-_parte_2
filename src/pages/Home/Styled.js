import styled from "styled-components";

export const Container = styled.div`
    width: 100vh;
    height: 100vh;
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
    height> 15px;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
`