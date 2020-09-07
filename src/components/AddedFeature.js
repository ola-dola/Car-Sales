import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../state/actionCreators";

const AddedFeature = ({ feature, removeFeature }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={(e) => {
          return removeFeature(feature);
        }}
      >
        X
      </button>
      {feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
