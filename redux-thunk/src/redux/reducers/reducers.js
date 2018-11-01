import {
  ADD_ITEM,
  DELETE_ITEM,
  ADD_BIKER,
  ADD_BMX_BIKE
} from "../actions/actions";
import { combineReducers } from "redux";

//state = {items : [] , bikeData : { bmxBikes : [] , rider: [] }}
// export function myAppReducer(state = { items: [], bikeData: {} }, action) {
//   return {
//     items: itemsReducer(state.items, action),
//     bikeData: myBikeReducer(state.bikeData, action)
//   };
// }

//Reducer that deal with the items part of the store
function itemsReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...(state || []), action.payload];
    case DELETE_ITEM:
      return state.filter(el => el.id !== action.payload);
    default:
      return state;
  }
}

//Reducer that deal with the bikeData part of the store
function myBikeReducer(state = { bmxBikes: [], rider: [] }, action) {
  switch (action.type) {
    case ADD_BIKER:
      return Object.assign({}, state, {
        rider: [...(state.rider || []), action.payload]
      });
    case ADD_BMX_BIKE:
      return Object.assign({}, state, {
        bmxBikes: [...(state.bmxBikes || []), action.payload]
      });
    default:
      return state;
  }
}

export const myAppReducer = combineReducers({ itemsReducer, myBikeReducer });
