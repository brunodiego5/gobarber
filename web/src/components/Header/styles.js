import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const ImgLogo = styled.img`
  margin-right: 20px;
  padding-right: 20px;
  border-right: 1px solid #eee;
`;

export const LinkLogo = styled(Link)`
  font-weight: bold;
  color: #7159c1;
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
`;

export const ImgProfile = styled.img`
  height: 32px;
  border-radius: 50%;
`;

export const ProfileLink = styled.div`
  text-align: right;
  margin-right: 10px;
`;

export const LinkProfile = styled(Link)`
  display: block;
  margin-top: 2px;
  font-size: 12px;
  color: #999;
`;

export const StrongNome = styled.strong`
  display: block;
  color: #333;
`;
