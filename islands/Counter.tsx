/** @jsx h */
import { h } from "preact";
import Button from "../components/Button.tsx";

export default function Counter() {
  return (
    <div>
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Button size="md">YO</Button>
    </div>
  );
}
