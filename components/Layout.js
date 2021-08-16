import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
export default function Layout({ title, desciption, keywords, children }) {
  return (
    <div
      style={{
        scrollBehavior: "smooth",
      }}
      className="bg-cyan-50 h-screen w-screen overflow-x-hidden "
    >
      <Head>
        <title>{title}</title>
        <meta name="desciption" content={desciption} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "Top Brands",
  desciption: "Find Your bran in here ",
  keywords: "Hats wallets Handbag and Others..",
};
