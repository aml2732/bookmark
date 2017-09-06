import React, { Component } from 'react';
import Bookmark from './Bookmark.js';


let bookmarks = [{
  name: "Google",
  description: "The best search engine",
  link: "https://www.google.com",
  tags: ["search","search-engine", "popular", "home-page", "job", "top-ten", "most-used", "light-weight", "high-traffic", "test", "doodle", "start", "helloworld"]
},
{
  name: "Facebook",
  description: "multi use social media",
  link: "https://facebook.com/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  tags: ["social media", "popular"]
}];

function listBookmarks(bookmarkList){
  return bookmarkList.map((bookmark) =>
    <Bookmark bookmark={bookmark} />
  );
}


class MyBookmarks extends Component {
  render() {
    return (
      <div className="container">
        {listBookmarks(bookmarks)}
      </div>
    );
  }
}

export default MyBookmarks;
