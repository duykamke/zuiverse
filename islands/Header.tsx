/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import CharNav from "../components/CharNav.tsx";

interface HeaderProps {
  activeRoute: string;
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <div>
      <div
        class={tw
          `font-mono w-full inline-flex justify-between items-center py-4 px-8 bg-gradient-to-r from-yellow-500 via-alice-300 to-blue-100 text-eerie-500 animate-gradient-x will-change-auto`}
      >
        <header class={tw`group`}>
          <h2 class={tw`font-mono`}>
            {props.activeRoute === "/"
              ? (
                <span>
                  <b>Welcome to</b> <br class={tw`block md:hidden`} />
                </span>
              )
              : <b></b>}
            <span class={tw`relative`}>
              <span
                class={tw
                  `inline-flex overflow-x-hidden animate-type-text will-change-auto`}
              >
                {props.title}
              </span>
              <span
                class={tw
                  `w-1 absolute -bottom-0 left-0 -top-1 inline-block bg-eerie-100 w-full animate-cursor animate-type will-change-auto`}
              >
              </span>
            </span>
          </h2>
        </header>
        <a
          class={tw`inline-flex justify-between items-center gap-2`}
          href="https://fresh.deno.dev/"
          target="_blank"
        >
          <h5 class={tw`underline`}>built with fresh framework</h5>
          <img src="logo.svg" />
        </a>
      </div>
      <div className={tw`mt-2 px-2 w-screen`}>
        <CharNav active={props.activeRoute} />
      </div>
    </div>
  );
}
