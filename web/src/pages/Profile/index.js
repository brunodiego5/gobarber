import React from 'react';
import { useSelector } from 'react-redux';

import * as Styled from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Styled.Container>
      <Styled.FormProfile initialData={profile} onSubmit={handleSubmit}>
        <Styled.InputProfile name="name" placeholder="Nome completo" />
        <Styled.InputProfile
          name="email"
          placeholder="Seu endereço de e-email"
        />

        <Styled.Hr />

        <Styled.InputProfile
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Styled.InputProfile
          type="password"
          name="password"
          placeholder="Nova senha"
        />
        <Styled.InputProfile
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <Styled.Button type="submit">Atualizar Perfil</Styled.Button>
      </Styled.FormProfile>

      <Styled.ButtonSair type="button">Sair do GoBarber</Styled.ButtonSair>
    </Styled.Container>
  );
}
