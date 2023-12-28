import React from "react";
import { Button } from "@/app/components/ui/button";
import HeaderElement from "./HeaderElement"; // adjust the path according to your project structure
import SocialIcons from "@/app/components/social-links";

const HeaderComponent = () => {
  return (
    <section>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "50%",
          backgroundImage:
            "url('https://tecdn.b-cdn.net/img/new/slides/146.webp')",
          height: "450px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="px-0 text-center text-white md:px-12">
              <HeaderElement />
              <SocialIcons />{" "}
              <Button type="button" size={"lg"} className="text-black">
                My Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderComponent;
