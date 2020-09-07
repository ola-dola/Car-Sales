import { BUY_ITEM, REMOVE_FEATURE } from "./actionTypes";

export const removeFeature = (item) => {
  // dispatch an action here to remove an item
  return {
    type: REMOVE_FEATURE,
    payload: item,
  };
};

export const buyItem = (item) => {
  // dipsatch an action here to add an item
  console.log(item)
  return {
    type: BUY_ITEM,
    payload: item,
  };
};
