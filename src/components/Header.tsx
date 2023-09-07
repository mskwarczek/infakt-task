import styled from 'styled-components';
import { Link }  from 'react-router-dom';

import logo from '../assets/logo-infakt.svg';

const Logo = styled.img`
  margin-bottom: 12px;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  margin-bottom: 40px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.text.action};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  &:hover {
    color: ${({ theme }) => theme.color.text.primary};
  }
`;

const Header = () => {
  return (
    <header>
      <Logo src={logo} alt='InFakt logo' width='148' height='38' />
      <NavWrapper>
        <NavLink to='/'>Strona główna</NavLink>
        <NavLink to='/ksiegowi'>Księgowi</NavLink>
      </NavWrapper>
    </header>
  );
};

export default Header;
