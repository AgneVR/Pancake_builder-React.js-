import { combineReducers } from 'redux';
import pancakeBuilder from '../../pancakeBuilder';

export default combineReducers({
  [pancakeBuilder.constants.MODULE_NAME]: pancakeBuilder.reducer,
});
