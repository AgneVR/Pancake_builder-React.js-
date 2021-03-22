import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  sweetIngridients: [
    { fileName: 'banana', name: 'banana', id: 2, price: 1 },
    { fileName: 'chocolate', name: 'chocolate', id: 4, price: 0.5 },
    { fileName: 'kiwi', name: 'kiwi', id: 5, price: 1 },
    { fileName: 'nuts', name: 'nuts', id: 7, price: 2 },
    { fileName: 'oreo', name: 'oreo', id: 9, price: 1 },
    { fileName: 'raspberries', name: 'raspberries', id: 12, price: 1 },
    { fileName: 'straberies', name: 'straberies', id: 14, price: 1 },
    { fileName: 'whippedcream', name: 'whipped cream', id: 16, price: 1 },
    { fileName: 'pankace', name: 'pankace', id: 10, price: 0.5 },
  ],
  savouryIngridients: [
    { fileName: 'tomato', name: 'tomato', id: 15, price: 0.5 },
    { fileName: 'salad', name: 'salad', id: 13, price: 0.5 },
    { fileName: 'onions', name: 'onions', id: 8, price: 0.5 },
    { fileName: 'pickles', name: 'pickles', id: 11, price: 0.5 },
    { fileName: 'meat', name: 'meat', id: 6, price: 2 },
    { fileName: 'cheese', name: 'cheese', id: 3, price: 1 },
    { fileName: 'bacon', name: 'bacon', id: 1, price: 2 },
    { fileName: 'pankace', name: 'pankace', id: 10, price: 0.5 },
  ],
  defaultPancakeType: 1,
  towerPancake: [{ fileName: 'pancake-bottom', name: 'pancake bottom', id: 17, price: 0.5 }],
  pankaceTypes: [
    {
      value: 1,
      label: 'Sweet Pancake',
    },
    {
      value: 2,
      label: 'Savoury Pancake',
    },
  ],
  error: null,
  loading: false,
};

function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case actionTypes.CHANGE_DEFAULT_PANCAKE_TYPE:
      let newTower = state.towerPancake;
      if (state.towerPancake.length > 1) {
        newTower = [state.towerPancake[state.towerPancake.length - 1]];
      }
      return { ...state, towerPancake: newTower, defaultPancakeType: parseInt(payload) };

    case actionTypes.ADD_TO_TOWER:
      return { ...state, towerPancake: [payload, ...state.towerPancake] };

    case actionTypes.REMOVE_FROM_TOWER:
      return { ...state, towerPancake: state.towerPancake.filter((row, i) => i !== payload) };

    case actionTypes.RESET_PANCAKE:
      return {
        ...state,
        towerPancake: [{ fileName: 'pancake-bottom', name: 'pancake bottom', id: 17, price: 0.5 }],
      };

    default:
      return state;
  }
}

export default reducer;
