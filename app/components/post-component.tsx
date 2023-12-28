import Link from "next/link";
import React from "react";
import { Lilita_One, VT323 } from "next/font/google";
import { Post } from "../utils/interface";
import { Badge } from "./ui/badge";
import { Card, CardFooter, CardHeader, CardContent } from "./ui/card";

interface Props {
  post: Post;
}

const font = Lilita_One({ weight: "400", subsets: ["latin"] });
const dateFont = VT323({ weight: "400", subsets: ["latin"] });

const PostComponent = ({ post }: Props) => {
  return (
    <Link
      href={`/posts/${post?.slug?.current}`}
      className={`$cardStyle} group`}
    >
      <Card
        key={"post._id"}
        className="group-hover:bg-primary/90 group-hover:text-gray-800"
      >
        <CardHeader>
          <h2 className="font-poppins text-2xl dark:text-slate-300">
            {post?.title}
          </h2>
          <p
            className={`${dateFont.className} font-bold my-2 text-primary font-dateFont dark:group-hover:text-gray-50 group-hover:text-black`}
          >
            {new Date(post?.publishedAt).toDateString()}
          </p>
        </CardHeader>
        <CardContent>
          <p className="dark:text-gray-400 group-hover:text-gray-800 mb-4 line-clamp-2">
            {post?.excerpt}
          </p>
        </CardContent>

        {/* TAGS */}

        <CardFooter className="space-x-3">
          {post?.tags?.map((tag) => (
            <Badge
              variant={"secondary"}
              className="text-gray-50"
              key={tag?._id}
            >
              #{tag?.name}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
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
