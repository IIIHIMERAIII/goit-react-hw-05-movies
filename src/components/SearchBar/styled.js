import styled from "@emotion/styled";

export const Form = styled.form`
display: flex;
align-items: center;
width: 100%;
max-width: 600px;
background-color: #fff;
border-radius: 3px;
overflow: hidden;
margin-top: 25px;
height: 50px;
`;

export const FormBtn = styled.button`
display: inline-block;
width: 48px;
height: 48px;
border: 0;
background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/2048px-Search_Icon.svg.png');
background-size: 40%;
background-repeat: no-repeat;
background-position: center;
opacity: 0.6;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
`;

export const Input = styled.input`  
display: inline-block;
width: 100%;
font: inherit;
font-size: 20px;
border: none;
outline: none;
padding-left: 4px;
padding-right: 4px;
`;