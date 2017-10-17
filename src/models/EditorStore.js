import { observable, computed, action } from "mobx";
import marked from "marked"

function wrapText(mode, text) {
  const Wrapper = {
    "h": text => "# "+ text,
    "bold": text => "**"+ text + "**",
    "link": text => "[" + text + "](" + text + ")",
    "code": text => "```<br/>" + text + "<br/>```",
    "delline": text => "~~"+ text + "~~",
    "list":  text => "- " + text + "<br/>",
    "image": text => "![]("+ text + ")",
    "italic": text => "*"+ text + "*",
    "horiz": text => "---<br/>"+text,
    "quote": text => "> " + text
  };

  return Wrapper[mode].apply(this, [text]);
}

export default class EditorStore {
  @action
  modifyChange(type) {
    if(1) {
      let range = window.getSelection().getRangeAt(0);
      let text = window.getSelection().getRangeAt(0).toString();
      let node = document.createElement('span');

      range.deleteContents();
      node.innerHTML = wrapText(type, text)
      range.insertNode(node);
      this.mdRender();
    }
  }

  @action
  mdRender() {
    document.querySelector('.hake-pre').innerHTML = marked(document.querySelector('.hake-text').innerText )
  }
}
