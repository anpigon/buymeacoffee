import styled from 'styled-components';

export const TopContainer = styled.div`
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  height: 69px;
  padding: 0 48px;
  justify-content: space-between;
  align-items: center;

  & img {
    max-height: 35px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
    height: 60px;

    & img {
      max-height: 30px;
    }
  }
`;

export default function Top(): JSX.Element {
  return (
    <TopContainer>
      <img src={process.env.PUBLIC_URL + '/coffee.svg'} alt='coffee cup' />
    </TopContainer>
  );
}
