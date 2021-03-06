import React from "react";
import { FiLink } from "react-icons/fi";

export const useDebugValueSummary = () => {
  return (
    <>
      <div>
        <h2 className="code-summary__title">useDebugValue</h2>
        <code className="code-summary__signature">
          <h5 className="code-summary__section-title">Signature</h5>
          <code className="code-summary__signature--function">useDebugValue</code>(
          <code className="code-summary__signature--argument">value</code>,
          <code className="code-summary__signature--argument">format</code>);
        </code>
      </div>
      <div>
        <h5 className="code-summary__section-title">Description</h5>
        <blockquote className="code-summary__description">
          Helps display a label in{" "}
          <a
            href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Devtools
          </a>{" "}
          for custom created hooks. Most helpful when used for custom Hooks that are part
          of shared libraries.
        </blockquote>
      </div>
      <div className="code-summary__links">
        <h5 className="code-summary__section-title">Useful links</h5>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-reference.html#usedebugvalue"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Hooks API Reference - useDebugValue
          </a>
        </div>
      </div>
      <div className="code-summary__tips">
        <h5 className="code-summary__section-title">Tips</h5>
        <ul>
          <li>
            <a
              href="https://reactjs.org/docs/hooks-reference.html#usedebugvalue"
              target="_blank"
              rel="noopener noreferrer"
            >
              React documentation
            </a>{" "}
            recommends not using the useDebugValue Hook for every custom Hook but instead
            for custom Hooks that are part of shared libraries.
          </li>
        </ul>
      </div>
    </>
  );
};
