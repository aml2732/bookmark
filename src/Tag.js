import React, { Component } from 'react';
import './styles/Tag.css';
class Tag extends Component {
  render() {
    return(
      <span className="tag">
        {this.props.tag}
      </span>
    );
  }
}

export default Tag;
