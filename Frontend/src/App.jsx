import React, { useState } from "react";
import * as CodeEditor from "react-simple-code-editor";
const Editor = CodeEditor.default.default;
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./index.css";


const App = () => {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState("");

  async function reviewCode() {
    const response = await axios.post("https://ai-code-reviewer-89i7.onrender.com/api/review", {
      code,
    });
    console.log(response.data);
    setReview(response.data?.review || response.data);
  }
  return (
    <main>
      <div className="left">
        <div className="review" onClick={reviewCode}>
          Review
        </div>

        <div className="code">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 15,
              backgroundColor: "#2d2d2d",
              color: "#fff",
              border: "1px solid #444",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </div>

      <div className="right">
        <div style={{ padding: "1rem", whiteSpace: "-wrap" }}>
          <Markdown style={{
            fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 16,
               border: "1px solid #444",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
          }} rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </div>
    </main>
  );
};

export default App;
