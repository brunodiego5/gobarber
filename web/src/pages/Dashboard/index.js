import React from 'react';

import * as Styled from './styles';

export default function () {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Button type="button">
          <Styled.IconLeft size={36} color="#fff" />
        </Styled.Button>

        <Styled.Strong>31 de Maio</Styled.Strong>

        <Styled.Button type="button">
          <Styled.IconRight size={36} color="#fff" />
        </Styled.Button>
      </Styled.Header>

      <Styled.List>
        <Styled.Time past>
          <Styled.StrongTime>08:00</Styled.StrongTime>
          <Styled.Span>Bruno Domingues</Styled.Span>
        </Styled.Time>
        <Styled.Time>
          <Styled.StrongTime available>09:00</Styled.StrongTime>
          <Styled.Span available>Em aberto</Styled.Span>
        </Styled.Time>
        <Styled.Time>
          <Styled.StrongTime>10:00</Styled.StrongTime>
          <Styled.Span>Bruno Domingues</Styled.Span>
        </Styled.Time>
        <Styled.Time>
          <Styled.StrongTime>11:00</Styled.StrongTime>
          <Styled.Span>Bruno Domingues</Styled.Span>
        </Styled.Time>
      </Styled.List>
    </Styled.Container>
  );
}
