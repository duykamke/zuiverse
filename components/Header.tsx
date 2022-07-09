import { useRouter } from "next/router";
import { tw } from "twind";

export default function Header() {
  const router = useRouter();

  return (
    <div
      className={tw
        `font-mono w-full inline-flex justify-between items-center py-4 px-8 bg-gradient-to-r from-yellow-500 via-alice-300 to-blue-100 text-eerie-500 animate-gradient-x`}
    >
      <div className={tw`group`}>
        <h2>
          {router.route === "/"
            ? (
              <span>
                <b>Welcome to</b> <br className={tw`block md:hidden`} />
              </span>
            )
            : <b></b>}
          <span className={tw`relative`}>
            <span
              className={tw`inline-flex overflow-x-hidden animate-type-text`}
            >
              Zuiverse!
            </span>
            <span
              className={tw
                `w-1 absolute -bottom-0 left-0 -top-1 inline-block bg-eerie-100 w-full animate-type`}
            >
            </span>
          </span>
        </h2>
      </div>
      <a
        className={tw`inline-flex justify-between items-center gap-2`}
        href="https://fresh.deno.dev/"
        target="_blank"
      >
        <h5 className={tw`underline`}>built with Next.js + bun runtime</h5>
        <img src="logo.svg" />
      </a>
    </div>
  );
}
