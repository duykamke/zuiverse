/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";
import LeftNav from "../islands/LeftNav.tsx";
import { tw } from "@twind";

export default function MainPage(props: PageProps) {
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
        <meta property="og:url" content={props.url.href} />
      </Head>
      <div class={tw`flex flex-col min-h-screen`}>
        <div>
          <Header />
        </div>
        <div class={tw`bg-neutral-500 flex flex-row py-4`}>
          <LeftNav />
        </div>
      </div>
    </>
  );
}
