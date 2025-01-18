import styled from "styled-components";

const Button = styled.button`
    width: 15px;
    height: 15px;
    cursor: pointer;
    background-color: ${({ color }) => color || '#333'};
    border: none;
    border-radius: 20px;
    padding: 0 !important;

    &:hover,
    &:focus {
        outline: none;
        opacity: 0.6;
    }
`
export default Button;