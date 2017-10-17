import React from "react";
import ReactDOM from 'react-dom'
import Button from './components/Button';
import { observer } from "mobx-react";

export default function WrapTool(list, store) {
  @observer
  class Tool extends React.Component {
    componentDidMount() {
      ReactDOM.findDOMNode(this).addEventListener('click', this.onClick.bind(this));
    }

    componentWillUnmount() {
      ReactDOM.findDOMNode(this).removeEventListener('click', this.onClick.bind(this));
    }

    onClick() {
      store.modifyChange(this.props.type);
    }

    render() {
      return <Button {...this.props}/>
    }
  }

  let tools = [];

  for(let i in list) {
    list[i].type && tools.push(<Tool store={store} key={i} {...list[i]}/>)
  }

  return tools
}