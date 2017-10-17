import React from "react";
import { render } from "react-dom";

import EditorStore from "./models/EditorStore";
import Editor from './components/Editor'
import WrapTool from './WrapTool'

const store = new EditorStore();
let Tools = WrapTool([
  {type: "h"},
  {type: "italic"},
  {type: "bold"},
  {type: "delline"},
  {type: "quote"},
  {type: "link"},
  {type: "image"},
  {type: "horiz"},
  {type: "code"},
  {type: "list"},
], store);

render(
  <div>
    <Editor store={store}
      tools={Tools}
    />
  </div>,
  document.getElementById("root")
);

// playing around in the console
window.store = store;
