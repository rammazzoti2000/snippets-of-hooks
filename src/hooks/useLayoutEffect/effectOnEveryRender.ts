import { CodeSnippet } from "../../lib/types";

export const effectOnEveryRender: CodeSnippet = {
  id: "useLayoutEffect_01",
  title: "Run effect on every render",
  code: `import React, { useLayoutEffect } from "react";

export const FunctionComponent = () => {
  useLayoutEffect(() => {
    console.log("run for every component render");
  });
};`,
  notes: {
    "5": "function passed into the hook is the 'effect' that is to run on every render"
  }
};