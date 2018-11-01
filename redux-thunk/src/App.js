import React, { Component } from "react";
import "./index.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { myAppReducer } from "./redux/reducers/fetchRandomUserReducers";
import thunkMiddleware from "redux-thunk";
import { fetchMultipleUsersNames } from "./redux/actions/fetchRandomUserActions";

import RandomUserView from "./randomUserElements/RandomUserView";

const store = createStore(
  myAppReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//store.dispatch(fetchMultipleUsersNames());

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <RandomUserView />
        </Provider>
      </div>
    );
  }
}

export default App;

/*
INCREMENT ASYNC

import React, { Component } from "react";
import "./index.css";
import { createStore, applyMiddleware, compose } from "redux";
import {
  incrementCount,
  decrementCount,
  decrementCountIf
} from "./redux/actions/asyncIcrementActions";
import { appReducer } from "./redux/reducers/asyncIncrementReducers";
import thunkMiddleware from "redux-thunk";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 children="Hello is this new? dafuq?" />
      </div>
    );
  }
}

export default App;

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.dispatch(decrementCountIf());
store.dispatch(decrementCountIf());
store.dispatch(incrementCount());
store.dispatch(decrementCountIf());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount());
*/

/*
import {
  addItem,
  deleteItem,
  addBiker,
  ddBmxBike,
  addBmxBike
} from "./redux/actions/actions";

store.dispatch(addItem({ name: "ceapa", id: "ceapa-id" }));
store.dispatch(addItem({ name: "varza", id: "varza-id" }));
store.dispatch(addItem({ name: "cascheta", id: "cascheta-id" }));
store.dispatch(addItem({ name: "apa", id: "apa-id" }));
console.log(store.getState());
store.dispatch(deleteItem("varza-id"));
console.log(store.getState());
store.dispatch(addBiker({ name: "Scotty C", age: 30 }));
store.dispatch(addBiker({ name: "Matty C", age: 25 }));
store.dispatch(
  addBmxBike({
    model: "Hangover",
    comp: "Total",
    size: "20.5TT",
    year: "2017",
    price: "500$"
  })
);
store.dispatch(addBiker({ name: "BigBoy C", age: 26 }));
store.dispatch(
  addBmxBike({
    model: "Outfit",
    comp: "Kink",
    size: "21TT",
    year: "2012",
    price: "1000$"
  })
);
*/
