import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import * as Styled from './styles';

import AvatarInput from './AvatarInput';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Styled.Container>
      <Styled.FormProfile initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
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

      <Styled.ButtonSair type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </Styled.ButtonSair>
    </Styled.Container>
  );
}
