import React from "react";
import { connect } from "react-redux";
import { fetchRandomUser } from "../redux/actions/fetchRandomUserActions";

let RandomUserView = ({ error, fetching, userInfo, generateNewUser }) => (
  <div className="random-user-app">
    {userInfo ? (
      !fetching ? (
        <div className="user-infos">
          <div
            style={{
              borderRadius: "50%",
              width: 100,
              height: 100
            }}
            className="user-image"
          >
            <img
              src={userInfo.picture.medium}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%"
              }}
            />
          </div>
          <h2>{`${userInfo.name.title} ${userInfo.name.first} ${
            userInfo.name.last
          }`}</h2>
          <h5>Email : {userInfo.email}</h5>
          <p>From : {userInfo.location.city} </p>
        </div>
      ) : (
        <h2>Loading..</h2>
      )
    ) : (
      <div className="no-user">No user data.</div>
    )}
    <div className="generate-user">
      <h4 onClick={generateNewUser} style={{ opacity: fetching ? 0.5 : 1 }}>
        {fetching ? "Loading..." : "Generate a new user"}
      </h4>
    </div>
  </div>
);

const mapStateToProps = state => {
  console.log(state);
  return state;
};

const mapDispatchToPros = dispatch => {
  return {
    generateNewUser: () => {
      dispatch(fetchRandomUser());
    }
  };
};

RandomUserView = connect(
  mapStateToProps,
  mapDispatchToPros
)(RandomUserView);
export default RandomUserView;
