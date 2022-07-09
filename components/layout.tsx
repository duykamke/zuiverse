import Head from "next/head";
import { useRouter } from "next/router";
import { tw } from "twind";
import CharNav from "./CharNav";
import Header from "./Header";

export default function Layout({ children }) {
  const TITLE = "zuiverse";
  const DESCRIPTION = "just zui's stuff";

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
      </Head>
      <header>
        <Header />
        <CharNav />
      </header>
      <main
        className={tw`flex flex-col min-h-screen`}
      >
        {children}
      </main>
    </>
  );
}
