import React from "react";
import { Post } from "src/libs/client";
import styled from "styled-components";
import Card from "./Card";
import ExternalLink from "./ExternalLink";

const PostItemContainer = styled.div`
  display: flex;

  .contents {
    flex: 1;
  }

  .image {
    width: 92px;
    height: 92px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const PostTitle = styled.div`
  color: #222;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

const PostSummary = styled.div`
  width: 100%;
  color: #333;
  font-size: 14px;
  display: -webkit-box;
  overflow: hidden;
  word-break: keep-all;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default function PostItem({ post }: { post: Post }): JSX.Element {
  const { title, body, url, image } = post;
  return (
    <Card>
      <ExternalLink href={`https://www.steemit.com${url}`}>
        <PostItemContainer>
          <div className="contents">
            <PostTitle>{title}</PostTitle>
            <PostSummary>{body}</PostSummary>
          </div>
          {image && (
            <div
              className="image"
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
        </PostItemContainer>
      </ExternalLink>
    </Card>
  );
}
