import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import pancakeBuilder from '../../../pancakeBuilder';
import './index.scss';

function OrderSuccess({ resetPancake }) {
  useEffect(() => {
    resetPancake();
  }, []);

  return (
    <div className='success'>
      <div className='success--message'>
        <h4>Congradulations!!! Your order is successfull!</h4>
      </div>
    </div>
  );
}

const enhance = connect(
  state => {
    return {
      savouryPancakeIngridients: pancakeBuilder.selectors.getSavouryIngridients(state),
      sweetPancakeIngridients: pancakeBuilder.selectors.getSweetIngridients(state),
      defaultPancakeType: pancakeBuilder.selectors.getDefaultPancakeType(state),
      towerPancake: pancakeBuilder.selectors.getTower(state),
    };
  },
  dispatch =>
    bindActionCreators(
      {
        resetPancake: pancakeBuilder.actions.resetPancake,
      },
      dispatch,
    ),
);

export default enhance(OrderSuccess);
