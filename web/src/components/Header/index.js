import React from 'react';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import * as Styled from './styles';

function Header() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Nav>
          <Styled.ImgLogo src={logo} alt="GoBarber" />
          <Styled.LinkLogo to="/dashboard">DASHBOARD</Styled.LinkLogo>
        </Styled.Nav>

        <Styled.Aside>
          <Notifications />

          <Styled.Profile>
            <Styled.ProfileLink>
              <Styled.StrongNome>Bruno Domingues</Styled.StrongNome>
              <Styled.LinkProfile to="/profile">Meu perfil</Styled.LinkProfile>
            </Styled.ProfileLink>

            <Styled.ImgProfile
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Bruno Diego"
            />
          </Styled.Profile>
        </Styled.Aside>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Header;
