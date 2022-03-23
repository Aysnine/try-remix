import { MetaFunction } from "remix";
import { useState } from "react";
import Button from "@mui/material/Button";

export const meta: MetaFunction = () => ({
  description: "hello world",
});

export default function Index() {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <Button
        variant="contained"
        onClick={() => {
          setCounter((c) => c + 1);
        }}
      >
        Counter {counter}
      </Button>
    </div>
  );
}
