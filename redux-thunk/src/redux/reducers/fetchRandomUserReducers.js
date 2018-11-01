// my state structure : { fetching: true , userInfo : {} , error : err , lastFetchedAt : false}
import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_COMPLETED,
  DATA_FETCHING_ERROR,
  FETCH_USER_NAME
} from "../actions/fetchRandomUserActions";

export const myAppReducer = (
  state = {
    fetching: false,
    userInfo: "",
    error: false,
    lastFetchedAt: false,
    usernames: []
  },
  action
) => {
  switch (action.type) {
    case FETCH_USER_NAME:
      return {
        ...state,
        usernames: [
          ...state.usernames,
          {
            db: action.userName,
            me: action.nameByMe
          }
        ]
      };
    case DATA_FETCHING_STARTED:
      return {
        ...state,
        fetching: true,
        error: false
      };
    case DATA_FETCHING_COMPLETED:
      return {
        ...state,
        fetching: false,
        userInfo: action.userData
      };
    case DATA_FETCHING_ERROR:
      console.log(action);
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    default:
      return state;
  }
};
