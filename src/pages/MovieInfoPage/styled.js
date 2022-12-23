import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(225deg, rgb(105, 113, 211) 0%, rgb(120, 75, 160) 50%, rgb(42, 120, 171) 100%);
  width: 100%;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  padding-top: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(225deg, rgb(105, 113, 211) 0%, rgb(120, 75, 160) 50%, rgb(42, 120, 171) 100%);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid white;
`;

export const WrapperBtn = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
`;

export const WrapperOutlet = styled.div`
  /* padding-top: 25px; */
  padding-right: 25px;
  /* padding-bottom: 25px; */
  display: flex;
  align-items: flex-end;
  background: rgba(176, 130, 171, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid white;
`;

export const Image = styled.img`
  height: 540px;
  margin-left: 20px;
`;

export const Desc = styled.div`
  margin-left: 20px;
  color: white;
  font-weight: 500;
  margin-bottom: auto;
`;

export const TextWrap = styled.span`
  color: orange;
`;

export const Title = styled.h1`
  color: orange;
`;

export const BackBtn = styled(NavLink)`
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: rgba(248, 246, 248, 0.25);
  font-size: 30px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 10px 10px 10px 0;
  text-decoration: none;
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.05);
  }
`;

export const Btn = styled.button`
  transform: scale(1);
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: white;
  background-color: #5e475c;
  border: none;
  border: 1px solid white;
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  :hover {
    /* transform: scale(1.05); */
    color: #f2f2f2;
    /* background-color: #91778e; */
    background-color: #91778e;
  }
`;

export const Linked = styled(NavLink)`
  cursor: default;
  &.active {
    color: #f1962e;
    button {
      color: white;
      background-color: #8978a3;
    }
  }
`;

export const IconBack = styled(BiArrowBack)`
  width: 32px;
  height: 32px;
  fill: white;
  transition: fill 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    fill: white;
  }
`;