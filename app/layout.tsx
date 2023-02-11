import Footer from "#/components/footer";
import { Header } from "#/components/header";
import "../styles/globals.css";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className="overflow-y-hidden h-screen flex flex-col justify-between bg-black px-8 py-2">
        <Header />
        <div className="overflow-y-scroll h-full">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
