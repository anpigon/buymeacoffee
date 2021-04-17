import styled from 'styled-components';

const Icon = styled.div`
  width: 35px;
  height: 35px;
  background-color: #b2b5ba;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  opacity: 0.3;

  img {
    width: 50%;
    height: 50%;
  }
`;

export default function IconLink(): JSX.Element {
  return (
    <Icon>
      <img src={process.env.PUBLIC_URL + '/link.png'} alt='link' />
    </Icon>
  );
}
