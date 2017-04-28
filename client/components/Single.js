import React from 'react';
import Photo from './Photo'
import Comments from './Comments'

//import comments


 class Single extends React.Component {
  render (){
    //index of post
    const postId = this.props.params.postId
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || []
    console.log(post)
    return (
      <div className="single-photo">
          <Photo i={i} post={post} {...this.props} />
          <Comments postComments={postComments} {...this.props}/>
      </div>
    );
  }
};

export default Single;
