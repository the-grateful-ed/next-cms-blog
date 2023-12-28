import Header from "@/app/components/header";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { VT323 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";

const dateFont = VT323({ weight: "400", subsets: ["latin"] });

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    body,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

const page = async ({ params }: Params) => {
  console.log(params, "parmas");
  const post: Post = await getPost(params?.slug);
  console.log(post, "post");

  if (!post) {
    notFound();
  }

  return (
    <article
      className="px-4 py-12 mx-auto"
      itemID="#"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="w-full mx-auto mb-12 text-left px-2 sm:px-0">
        {/* <img
          src="/brand/og.png"
          className="object-cover w-full h-64 bg-center rounded-lg"
          fill
          alt="Post Image"
        /> */}
        {/* <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
          Development
        </p> */}
        <h1
          className="mb-3 text-3xl font-bold leading-tight md:text-4xl"
          itemProp="headline"
          title="{post?.title}"
        >
          <Header title={post?.title} />
        </h1>
        <div className="flex mb-2 space-x-2">
          {post?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <Badge variant={"secondary"} className="text-sm lowercase">
                #{tag.name}
              </Badge>
            </Link>
          ))}
        </div>
        <Link className="mt-2 flex items-center text-gray-700" href="#">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">edndacomputer</p>
            <p className="text-sm text-gray-500">
              <span className={`${dateFont?.className} text-primary`}>
                {new Date(post?.publishedAt).toDateString()}
              </span>
            </p>
          </div>
        </Link>
      </div>

      <div className="w-full mx-auto prose dark:prose-invert">
        <div className={richTextStyles}>
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </article>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value).url()}
        alt="Post"
        width={1100}
        height={700}
      />
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-4xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
