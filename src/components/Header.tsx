import styled from "styled-components";

export const Avatar = styled.img`
  border: 5px solid rgba(255, 129, 63, 0.1);
  border-radius: 50%;
  width: 90px;
  height: 90px;
  filter: sepia(100%);

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    border: 0;
  }
`;

export const Username = styled.h1`
  margin-left: 24px;
  font-size: 22px;
  line-height: 30px;
  color: #222;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 20px;
  }
`;

export const HeaderContainer = styled.div`
  padding: 24px 0;
  background: #fff;
  box-shadow: 0 4px 9px -5px rgb(0 0 0 / 5%);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-container {
    width: 1032px;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1200px) {
      width: 100%;
      padding: 0 15px;
    }

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .header-1 {
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export type HeaderProps = {
  username: string;
};

export default function Header({ username }: HeaderProps): JSX.Element {
  return (
    <HeaderContainer>
      <div className="header-container">
        <div className="header-1">
          <Avatar src={`https://steemitimages.com/u/${username}/avatar`} />
          <Username>{username}</Username>
        </div>
        <div className="header-2"></div>
      </div>
    </HeaderContainer>
  );
}
