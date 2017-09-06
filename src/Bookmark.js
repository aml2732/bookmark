import React, { Component } from 'react';
import './Bookmark.css';
import Tag from './Tag.js';

function trimLink(str){
  if(str.length > 50){
    return str.substring(0,50) + "...";
  }
  return str;
}

function tagList(tags){
  return tags.map((tag) =>
    <Tag tag={tag} />
  );
}

class Bookmark extends Component {
  render() {
    return(
      <div className="bookmark">
        <strong>{this.props.bookmark.name}</strong>
        <br/>
        <div>{this.props.bookmark.description}</div>
        <div><a href={this.props.bookmark.link}>{trimLink(this.props.bookmark.link)}</a></div>
        <div>{tagList(this.props.bookmark.tags)}</div>
      </div>
    );
  }
}

export default Bookmark;
