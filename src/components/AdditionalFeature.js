import React from "react";
import { useDispatch } from "react-redux";
import { buyItem } from "../state/actionCreators";

const AdditionalFeature = ({feature}) => {
  const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={(e) => {
          return dispatch(buyItem(feature));
        }}
      >
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

// Use this line for the "old" connect ways. Check AddedFeatures for example.
// export default connect(null, { buyItem })(AdditionalFeature);    
export default AdditionalFeature;
