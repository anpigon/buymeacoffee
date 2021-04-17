import styled from "styled-components";
import SkeletonBox from "react-loading-skeleton";

import Card from "./Card";

const SkeletonContainer = styled(Card)`
  display: flex;
  .contents {
    flex: 1;
    margin-right: 20px;

    & > span:first-child {
      display: block;
      margin-bottom: 10px;
    }
  }
  .image {
    width: 92px;
    height: 92px;
  }
`;

export default function SkeletonArticle(): JSX.Element {
  return (
    <SkeletonContainer>
      <div className="contents">
        <SkeletonBox height={20} />
        <SkeletonBox count={3} />
      </div>
      <div className="image">
        <SkeletonBox height={92} />
      </div>
    </SkeletonContainer>
  );
}
