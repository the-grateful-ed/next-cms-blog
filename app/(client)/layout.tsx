import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { Provider } from "../utils/Provider";
import Footer from "@/app/components/footer";
import MainContainer from "../components/main-container";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | edndacomputer",
    default:
      "a personal blog about technology and the current state of the internet", // a default is required when creating a template
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      {" "}
      <body className="">
        <MainContainer>
          <Provider>
            <div className="flex min-h-screen flex-col justify-between font-poppins">
              <Navbar />
              <main className="mb-auto flex-1 bg-accent">{children}</main>
              <Footer />
            </div>
          </Provider>
        </MainContainer>
      </body>
    </html>
  );
}
