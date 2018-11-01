//Actions Types
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_BIKER = "ADD_BIKER";
export const ADD_BMX_BIKE = "ADD_BMX_BIKE";

//Actions Creators

//ACTION CREATORS FOR ITEM
//1. Add to the list
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

//2. Delete item from the list
export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id
});

//ACTION CREATORS FOR BIKES
//1. Add a new biker to the list
export const addBiker = biker => ({
  type: ADD_BIKER,
  payload: biker
});

//2. Add a new bmx-bike to the list
export const addBmxBike = bike => ({
  type: ADD_BMX_BIKE,
  payload: bike
});
