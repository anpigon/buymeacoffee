import React, { useEffect, useState } from "react";
import getPosts, { Post } from "src/libs/client";
import PostItem from "./PostItem";
import SkeletonArticle from "./SkeletonArticle";
import SubTitle from "./SubTitle";

type ArticlesProps = {
  author: string;
};

export default function Articles({ author }: ArticlesProps): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    getPosts({ author })
      .then((response) => {
        if (response && response.list && response.list.length) {
          const data = response?.list
            ?.filter(({ title }) => !title.startsWith("RE: "))
            .slice(0, 5);
          setPosts(data);
        }
      })
      .finally(() => setLoading(false));
  }, [author]);

  return (
    <>
      <SubTitle>Recent Articles</SubTitle>
      {loading && [
        <SkeletonArticle />,
        <SkeletonArticle />,
        <SkeletonArticle />,
      ]}
      {!loading &&
        posts?.map((post) => <PostItem key={String(post.url)} post={post} />)}
    </>
  );
}
