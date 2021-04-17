import styled from 'styled-components';
import Card from './Card';

const AboutCard = styled(Card)`
  color: #222;
  line-height: 25px;
  word-break: break-word;
  font-size: 16px;

  p {
    margin: 0 0 20px;
  }
`;

export default AboutCard;
