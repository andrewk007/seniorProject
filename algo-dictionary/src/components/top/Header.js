import styled from 'styled-components';
import Sidebar from './Sidebar';
import '../top/Header.css';
import logo from '../../pages/logo.PNG';
const Wrapper = styled.section`
  display:flex;
  background-color:black;
  color:white;
  position:-webkit-sticky;
  position:sticky;
  top:0px;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <img src={logo} alt = "logo" />
      </Wrapper>
    </>
  )
}



export default Header
