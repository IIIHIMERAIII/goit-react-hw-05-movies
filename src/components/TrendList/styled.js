import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MovieList = styled.ul`
gap: 30px;
padding: 30px;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const ListItem = styled.li`
  box-shadow: 1px 7px 63px 0px rgba(0,0,0,0.75);
`;

export const IdLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(48,29,145,0.55);
  border-radius: 7px;
  box-shadow: 1px 7px 63px 0px rgba(0,0,0,0.75);
`;
