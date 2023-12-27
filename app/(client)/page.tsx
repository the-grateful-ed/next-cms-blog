import { client } from "@/sanity/lib/client";
import Header from "../components/header";
import { Post } from "../utils/interface";
import PostComponent from "../components/post-component";
import Hero from "../components/hero";
import SocialIcons from "@/components/social-links";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");

  return (
    <div>
      <Hero />
      <SocialIcons />
      <Header title="Articles" tags />
      <div className="space-y-3 px-2">
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
