/** @jsx h */
import { h } from "preact";
import Header from "../islands/Header.tsx";
import Counter from "../islands/Counter.tsx";
import { tw } from "@twind";

export default function Home() {
  return (
    <div>
      <Header />
      <div class={tw`bg-neutral-500 min-h-[100vh-16px] px-16`}>
        <Counter />
      </div>
    </div>
  );
}
