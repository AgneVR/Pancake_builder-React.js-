import * as types from './actionTypes';

export const changeDefaultPancakeType = payload => ({
  type: types.CHANGE_DEFAULT_PANCAKE_TYPE,
  payload,
});

export const addToTower = payload => ({
  type: types.ADD_TO_TOWER,
  payload,
});

export const removeFromTower = payload => ({
  type: types.REMOVE_FROM_TOWER,
  payload,
});

export const resetPancake = payload => ({
  type: types.RESET_PANCAKE,
  payload,
});
