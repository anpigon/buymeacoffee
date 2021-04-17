import { FunctionComponent } from "react";

type ExternalLinkProps = {
  href: string;
};

const ExternalLink: FunctionComponent<ExternalLinkProps> = ({
  href,
  children,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
