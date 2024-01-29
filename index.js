const store = require("./app/store");

const cakeActions = require("./features/cake/cakeSlice");

const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;

const { ordered, restocked } = cakeActions?.cakeActions || {};

const fetchUsers =  require('./features/user/userSlice').fetchUsers

const unsub = store.subscribe(() => {
  console.log("unsub >>>>", store.getState());
});


store.dispatch(fetchUsers())

// store.dispatch(userActions.fetchUsersRequest())

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());

// store.dispatch(ordered());
// store.dispatch(ordered());
// store.dispatch(ordered());

