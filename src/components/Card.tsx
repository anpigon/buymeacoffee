import styled from 'styled-components';

export const CardTitle = styled.h2`
  font-size: 24px;
  line-height: 140%;
  color: #222;
  margin-top: 0;

  & > span {
    color: #717171;
  }
`;

export const CardBody = styled.div``;

export const CardFooter = styled.div`
  margin-top: 48px;
`;

const Card = styled.div`
  padding: 24px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgb(0 0 0 / 5%);
  margin-bottom: 15px;
`;

export default Card;
