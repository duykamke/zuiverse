/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Header() {
  return (
    <div
      class={tw
        `font-mono w-full inline-flex justify-between items-center py-4 px-8 bg-gradient-to-r from-yellow-500 via-alice-300 to-blue-100 text-eerie-500 animate-gradient-x will-change-auto`}
    >
      <header class={tw`group`}>
        <h2 class={tw`font-mono`}>
          Welcome to <br class={tw`block md:hidden`} />
          <span class={tw`relative`}>
            <span class={tw`inline-flex overflow-x-hidden animate-type-text will-change-auto`}>
              Zuiverse!
            </span>
            <span
              class={tw
                `w-1 absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-cursor animate-type will-change-auto`}
            >
            </span>
          </span>
        </h2>
      </header>
      <div class={tw`inline-flex justify-between items-center gap-2`}>
        <h5>built with deno-fresh</h5>
        <img src="logo.svg" />
      </div>
    </div>
  );
}
