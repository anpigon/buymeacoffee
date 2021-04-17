import styled from "styled-components";
import ExternalLink from "./ExternalLink";

const FooterContainer = styled.div`
  background: #f9f9f9;
  height: 110px;
  padding: 0 15px;

  .footer-contents {
    width: 100%;
    height: 100%;
    max-width: 1062px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 768px) {
      justify-content: center;
    }

    a {
      margin-left: 5px;
      font-weight: bold;
      color: #333;
    }
  }
`;

export default function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <div className="footer-contents">
        <span>Powered by</span>{" "}
        <ExternalLink href="https://www.steemit.com/@anpigon">
          anpigon
        </ExternalLink>
      </div>
    </FooterContainer>
  );
}
