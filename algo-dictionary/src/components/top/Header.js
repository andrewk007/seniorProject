import styled, { css } from 'styled-components';
import Sidebar from './Sidebar';
import logo from '../../pages/logo.PNG';
const Wrapper = styled.section`
  display:flex;
  background-color:black;
  color:white;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <img src={logo} />
      </Wrapper>
      
    </>
  )
}



export default Header
