import React from "react";
import debounce from "lodash.debounce";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class Editor extends React.Component {
  @observable newTodoTitle = "";

  render() {
    return (
      <div className="hake-editor">
        <div className="hake-input">
          <div className="hake-toolbox">{this.props.tools}</div>
          <div contentEditable="true" className="hake-text"></div>
        </div>
        <div className="hake-pre">
        </div>
      </div>
    );
  }

  componentDidMount() {
    let __self = this;

    document.querySelector('.hake-text').addEventListener('input', debounce(()=>__self.props.store.mdRender(), 300))
  }
}

export default Editor;
