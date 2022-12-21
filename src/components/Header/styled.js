import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";


export const Nav = styled(NavLink)`
text-decoration: none;
margin-right: 20px;
margin-left:20px;
font-size: 30px;
color: white;
padding: 20px;
&:hover {
    color:#74ff00;
    letter-spacing: 0.6rem;
    border-bottom: 5px solid white;
}
&.active {
  border-bottom: 3px solid #f1962e;
  color: #f1962e;
}
`;

export const Container = styled.div`
display: flex;
background-color: white;
height: 80px;
align-items: center;
background: rgb(80, 102, 0);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.7);
backdrop-filter: blur(4.1px);
`;