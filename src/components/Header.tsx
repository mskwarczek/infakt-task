import styled from 'styled-components';

import logo from '../assets/logo-infakt.svg'; 

const Logo = styled.img`
  margin-bottom: 48px;
`;

const Header = () => {
  return (
    <header>
      <Logo src={logo} alt='InFakt logo' width='148' height='38' />
    </header>
  );
};

export default Header;
