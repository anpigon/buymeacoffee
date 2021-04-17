import React from "react";

import Container from "./components/Container";
import Top from "./components/Top";
import Header from "./components/Header";
import IconLink from "./components/IconLink";
import { CardBody, CardFooter } from "./components/Card";
import AboutCard from "./components/AboutCard";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import Articles from "./components/Articles";
import ExternalLink from "./components/ExternalLink";

import config from "./config.json";
import DonationCard from "./components/DonationCard";

function App() {
  return (
    <Container>
      <Top />
      <Header username={config.username} />
      <Contents>
        <div className="body-container">
          <div className="body-panel-1">
            {config.donation.map((donation, index) => (
              <DonationCard
                key={`${donation.type}-${index}`}
                username={config.username}
                type={donation.type}
                address={donation.address}
              />
            ))}
          </div>
          <div className="body-panel-2">
            <AboutCard>
              <CardBody>
                {config.about.split("\n").map((text) => (
                  <p>{text}</p>
                ))}
              </CardBody>
              <CardFooter>
                <ExternalLink href={config.homepage}>
                  <IconLink />
                </ExternalLink>
              </CardFooter>
            </AboutCard>
            <Articles author={config?.username} />
          </div>
        </div>
      </Contents>
      <Footer />
    </Container>
  );
}

export default App;
