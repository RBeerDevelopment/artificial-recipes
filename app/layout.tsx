import Footer from "#/components/footer";
import { Header } from "#/components/header";
import "../styles/globals.css";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className="flex h-screen flex-col justify-between overflow-y-hidden bg-black px-8 py-2">
        <Header />
        <div className="h-full overflow-y-scroll">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
