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
      <Card key={"post._id"} className="=">
        <CardHeader>
          <h2 className="font-poppins text-2xl">{post?.title}</h2>
          <p className="font-mono font-bold my-2 text-primary">
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
