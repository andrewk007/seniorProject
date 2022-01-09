import styled, { css } from 'styled-components';
import Sidebar from './Sidebar';


const Wrapper = styled.section`
  display:flex;
  background-color:black;
  color:white;
`;

const Header = () => {
    return (
        <Wrapper> 
        <Sidebar/>
        <img src = 'logo.PNG'></img>
        </Wrapper>
    )
}



export default Header
