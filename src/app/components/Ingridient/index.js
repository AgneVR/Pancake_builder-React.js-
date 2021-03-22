import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import pancakeBuilder from '../../../pancakeBuilder';
import './index.scss';

function Ingridient({ name, setIndex, removeFromTower, towerPancake }) {
  return (
    <div className='Ingridient'>
      <a onClick={() => handleRemoveFromTower(setIndex)} nohref='true' target='_blank'>
        <img className='Ingridient--img' src={require(`../../images/${name}.png`)} alt='' />
        <span>click here to remove</span>
      </a>
    </div>
  );

  function handleRemoveFromTower(setIndex) {
    let lastIngridientIndex = towerPancake.length - 1;

    if (setIndex !== lastIngridientIndex) {
      removeFromTower(setIndex);
    }
  }
}

const enhance = connect(
  state => {
    return {
      towerPancake: pancakeBuilder.selectors.getTower(state),
    };
  },

  dispatch =>
    bindActionCreators(
      {
        removeFromTower: pancakeBuilder.actions.removeFromTower,
      },
      dispatch,
    ),
);
export default enhance(Ingridient);
