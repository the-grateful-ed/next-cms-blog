import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  tags?: boolean;
}

const Header = ({ title = "", tags = false }: Props) => {
  return (
    <header className="py-8 px-4 text-center border-b dark:border-border">
      <h2 className="font-poppins text-3xl mx-auto max-w-2xl font-thin">
        {title}
      </h2>

      {tags && (
        <div className="text-xs mt-2 hover:text-primary">
          <Link href="/tag">#tags</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
