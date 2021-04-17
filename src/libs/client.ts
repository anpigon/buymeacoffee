import axios from "axios";
import { stripMarkdown } from "./stripMarkdown";

const client = axios.create({
  baseURL: "https://api.wonsama.dev/v1",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export type Post = {
  id: number;
  url: string;
  title: string;
  body: string;
  author?: string;
  category?: string;
  created?: string;
  createdAt: string;
  json_metadata?: string;
  last_update?: string;
  permlink?: string;
  updatedAt?: string;
  updatedkr?: string;
  _id?: string;
  image?: string;
};

export type GetPostsResponse = {
  count: number;
  limit: number;
  page: number;
  list: Post[];
};

export type GetPostsParams = {
  page?: number;
  limit?: number;
  author: string;
};

export default async function getPosts({
  page = 1,
  limit = 10,
  author,
}: GetPostsParams): Promise<GetPostsResponse> {
  return await client
    .get<GetPostsResponse>("/post", {
      params: {
        page,
        limit,
        author,
      },
    })
    .then(async ({ data }) => {
      // markdown html strip
      for (const item of data.list) {
        item.body = String(await stripMarkdown(item.body));
      }
      const list: Post[] = data.list.map((item) => {
        let image;
        if (item?.json_metadata) {
          const metadata = JSON.parse(item?.json_metadata);
          if (metadata?.image && metadata.image?.length) {
            image = metadata.image[0];
          }
        }
        const { title, body, url, createdAt } = item;
        return { image, title, body, url, createdAt } as Post;
      });
      const { count, limit, page } = data;
      return { count, limit, page, list };
    });
}
