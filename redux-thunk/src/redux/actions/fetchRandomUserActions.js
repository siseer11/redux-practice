// my state : { fetching: true , userInfo : {} , error : err , lastFetchedAt : false}
//1. fetching started
//2. fetched
//3. fetching error

//ACTIONS TYPES
export const DATA_FETCHING_STARTED = "DATA_FETCHING_STARTED";
export const DATA_FETCHING_COMPLETED = "DATA_FETCHING_COMPLETED";
export const DATA_FETCHING_ERROR = "DATA_FETCHING_ERROR";
export const FETCH_USER_NAME = "FETCH_USER_NAME";

//ACTIONS CREATORS

export const dataFetchingStarted = () => ({
  type: DATA_FETCHING_STARTED
});

export const dataFetchingCompleted = userData => ({
  type: DATA_FETCHING_COMPLETED,
  userData
});

export const dataFetchingError = error => ({
  type: DATA_FETCHING_ERROR,
  error
});

export const dataFetchUserName = (userName, nameByMe) => ({
  type: FETCH_USER_NAME,
  userName,
  nameByMe
});

//ASYNC ACTIONS

const fetchUser = () =>
  fetch(`https://randomuser.me/api/`).then(response => response.json());

export const fetchRandomUser = () => {
  return (dispatch, getState) => {
    const currentState = getState();
    if (currentState.fetching) {
      console.log("already fetching... wait a second please");
      return;
    }

    //Dispatch that the fetching have started
    dispatch(dataFetchingStarted());

    //Start the fetching of the random user
    fetchUser()
      .then(userData => {
        //Dispatch fetch completed in case it succed
        dispatch(dataFetchingCompleted(userData.results[0]));
      })
      .catch(err => {
        //Dispatch error in case of an error
        dispatch(dataFetchingError(err));
      });
  };
};

//ASYNC ACTIONS control flow with Promises:

const fetchUserName = nameByMe => {
  return (dispatch, getState) =>
    fetchUser()
      .then(userData =>
        dispatch(dataFetchUserName(userData.results[0].name, nameByMe))
      )
      .catch(err => console.log("err la tambalau"));
};

export const fetchMultipleUsersNames = () => {
  return (dispatch, getState) => {
    dispatch(fetchUserName("brusli din Berceni"))
      .then(() =>
        Promise.all([
          dispatch(fetchUserName("brusli din Suceava")),
          dispatch(fetchUserName("brusli din Brasov"))
        ])
      )
      .then(
        () =>
          new Promise((resolve, reject) =>
            setTimeout(() => resolve("done"), 2000)
          )
      )
      .then(() => dispatch(fetchUserName("brusli din Sacele")))
      .then(() => console.log("gata tambalalu"));
  };
};
