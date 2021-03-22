import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import pancakeBuilder from '../../../pancakeBuilder';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import './index.scss';
// import { addToTower } from '../../../pancakeBuilder/actions';

function ChangePancakeType({
  sweetPancakeIngridients,
  savouryPancakeIngridients,
  defaultPancakeType,
  addToTower,
  towerPancake,
  history,
}) {
  if (defaultPancakeType === 2) {
    return savouryPancakeIngridients.map(data => {
      return (
        <div className='Ingridiet' key={data.id}>
          <div className='Ingridiet--title'>
            <p className='Ingridiet--name'>{data.name}</p>
          </div>
          <div className='Ingridiet--btnsum'>
            <button
              onClick={() => handleAddToTower(data, towerPancake)}
              className='Ingridiet--btn'
              type='button'
            >
              Add To Tower
            </button>
            <span>€{data.price}</span>
          </div>
        </div>
      );
    });
  } else {
    return sweetPancakeIngridients.map(data => {
      return (
        <div className='Ingridiet' key={data.id}>
          <div className='Ingridiet--title'>
            <p className='Ingridiet--name'>{data.name}</p>
          </div>
          <div className='Ingridiet--btnsum'>
            <button
              onClick={() => handleAddToTower(data, towerPancake)}
              className='Ingridiet--btn'
              type='button'
            >
              Add To Tower
            </button>
            <span>€{data.price}</span>
          </div>
        </div>
      );
    });
  }

  function handleAddToTower(data, towerPancake) {
    if (
      localStorage.getItem('userToken') !== null &&
      localStorage.getItem('userToken') !== undefined &&
      localStorage.getItem('userToken') !== ''
    ) {
      if (towerPancake.length <= 10) {
        addToTower(data);
      }
    } else {
      window.location = ROUTES.login;
    }
  }
}

function TotalPrice(towerPancake) {
  let total = 0;
  towerPancake.forEach(ingridient => {
    total = total + ingridient.price;
  });
  return total;
}

function Ingridients({
  savouryPancakeIngridients,
  sweetPancakeIngridients,
  defaultPancakeType,
  towerPancake,
  addToTower
}) {
  return (
    <div>
      <div className='SweetPancake'>
        <div className='Price'>
          <span className='Price--sum'>Current price: {TotalPrice(towerPancake)}</span>
        </div>
        <ChangePancakeType towerPancake={towerPancake} addToTower={addToTower} defaultPancakeType={defaultPancakeType} savouryPancakeIngridients={savouryPancakeIngridients} sweetPancakeIngridients={sweetPancakeIngridients}/>
        <div className='btn'>
          <NavLink exact className='Order-btn' to={ROUTES.order}>
            Order
          </NavLink>
        </div>
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
        addToTower: pancakeBuilder.actions.addToTower,
      },
      dispatch,
    ),
);

export default enhance(Ingridients);
