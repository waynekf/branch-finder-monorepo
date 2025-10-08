import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header></Header>
      <main className="container">{children}</main>
      <Footer></Footer>
    </>
  );
}
