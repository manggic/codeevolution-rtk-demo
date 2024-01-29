const cakeReducer = require("../features/cake/cakeSlice");

const logger = require("redux-logger").createLogger();

const icecreamReducer = require("../features/icecream/icecreamSlice");

const userReducer = require("../features/user/userSlice");

const configureStore = require("@reduxjs/toolkit").configureStore;

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

module.exports = store;
