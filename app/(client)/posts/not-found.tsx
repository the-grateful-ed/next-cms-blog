import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <>
      <main className="flex flex-grow flex-col bg-background">
        <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 pt-10 sm:pt-16">
            <Link href="/" className="inline-flex">
              <span className="sr-only">edndacomputer</span>
              <Image
                className="h-12 w-auto"
                src="/images/ufo.svg"
                fill
                alt="Not Found"
              />
            </Link>
          </div>
          <div className="my-auto flex-shrink-0 py-16 sm:py-32">
            <p className="text-base font-semibold text-primary">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link
                href="#"
                className="text-base font-medium text-primary hover:text-primary/50"
              >
                Go back home
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
