import Image from "next/image";

export default function Example() {
  return (
    <>
      <div className="flex min-h-full flex-col bg-background lg:relative">
        <div className="flex flex-grow flex-col">
          <main className="flex flex-grow flex-col bg-background">
            <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 pt-10 sm:pt-16">
                <a href="/" className="inline-flex">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-12 w-auto"
                    src="/images/not-found.jpg"
                    fill
                    alt="Not Found"
                  />
                </a>
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
                  <a
                    href="#"
                    className="text-base font-medium text-primary hover:text-primary/50"
                  >
                    Go back home
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
          <footer className="flex-shrink-0 bg-gray-50">
            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"></div>
          </footer>
        </div>
        <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            alt=""
            src="/images/not-found.jpg"
          />
        </div>
      </div>
    </>
  );
}
