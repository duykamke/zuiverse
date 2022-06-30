/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Button from "../components/Button.tsx";

export default function Header() {
  return (
    <div class={tw`w-screen h-fit inline-flex justify-between items-center py-4 px-6 bg-neutral-800`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <Button size="md" variant="primary">Logout</Button>
    </div>
  );
}
