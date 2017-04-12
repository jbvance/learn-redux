// a reducer takes in two things:
//1. the action (info about what happended)
//2. copy of current state

 function posts(state = [], action) {
   console.log("The post will chlange");
  console.log(state, action);
  return state;
}

export default posts;
