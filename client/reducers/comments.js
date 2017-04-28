function postComments(state=[], action){
  switch(action.type){
    case 'ADD_COMMENT':
    console.log("ADDING")
      //return existing state and the new comment
      return [
        ...state,
        {
          text: action.comment,
          user: action.author
        }
      ];

    case 'REMOVE_COMMENT':
      console.log("Removing a comment");
      return state;

    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined'){
    return {
      //take the current state
      ...state,
      //overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
  }

export default comments;
