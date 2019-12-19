import * as types from './actionTypes';

export const removeFeature = item => {
  return {
    type: types.REMOVE_FEATURE,
    payload: item
  }
};

export const buyItem = item => {
  return {
    type: types.BUY_ITEM,
    payload: item
  };
};