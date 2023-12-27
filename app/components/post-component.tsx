import Link from "next/link";
import React from "react";
import { Lilita_One, VT323 } from "next/font/google";
import { Post } from "../utils/interface";
import { Badge } from "./ui/badge";

interface Props {
  post: Post;
}

const font = Lilita_One({ weight: "400", subsets: ["latin"] });
const dateFont = VT323({ weight: "400", subsets: ["latin"] });

const PostComponent = ({ post }: Props) => {
  return (
    <div className={`$cardStyle} group`} key={"post._id"}>
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className="font-poppins text-2xl dark:text-slate-300">
          {post?.title}
        </h2>
        <p
          className={`${dateFont.className} font-bold my-2 text-primary font-dateFont dark:group-hover:text-gray-50 group-hover:text-black`}
        >
          {new Date(post?.publishedAt).toDateString()}
        </p>
        <p className="dark:text-gray-400 mb-4 line-clamp-2">{post?.excerpt}</p>
      </Link>

      {/* TAGS */}

      <div className="space-x-3">
        {post?.tags?.map((tag) => (
          <Badge key={tag?._id}>#{tag?.name}</Badge>
        ))}
      </div>
    </div>
  );
};

export default PostComponent;

const cardStyle = `
mb-8
p-4
border
border-gray-900
rounded-md
shadow-sm
shadow-primary
hover:shadow-md
hover:bg-primary/80
hover:text-white
hover:dark:bg-gray-950
`;
