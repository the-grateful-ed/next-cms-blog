import Image from "next/image";
import React from "react";

import Header from "./header";
import { Button } from "@/app/components/ui/button";

const Hero = () => {
  return (
    <section className=" overflow-hidden rounded-t-xl">
      <div
        className="relative bg-cover bg-no-repeat bg-primary"
        style={{
          backgroundPosition: "50%",
          height: "350px",
        }}
      >
        <Image
          src="/images/stars.jpg"
          layout="fill"
          objectFit="cover"
          quality={50}
          alt="Background image"
          className="opacity-50 absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <Button size={"lg"} variant={"secondary"}>
                My Resume
              </Button>
              <h3 className="mb-8 text-3xl font-bold text-gray-300">
                Subeading
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
