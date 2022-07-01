/** @jsx h */
import { h } from "preact";
import Header from "../islands/Header.tsx";
import LeftNav from "../islands/LeftNav.tsx";
import { tw } from "@twind";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div class={tw`bg-neutral-500 flex flex-row py-4`}>
        <LeftNav />
      </div>
    </div>
  );
}
