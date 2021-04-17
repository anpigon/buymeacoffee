import styled from 'styled-components';

const Contents = styled.div`
  padding-top: 48px;
  padding-bottom: 100px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > .body-container {
    width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: row-reverse;
    column-gap: 30px;

    @media (min-width: 1200px) {
      width: 1062px;
    }

    @media (max-width: 768px) {
      display: block;
    }
  }

  & .body-panel-1 {
    width: 40.22%;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 30px;
    }
  }

  & .body-panel-2 {
    width: 59.6%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export default Contents;
