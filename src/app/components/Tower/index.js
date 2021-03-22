import React from 'react';
import { connect } from 'react-redux';
import pancakeBuilder from '../../../pancakeBuilder';
import './index.scss';
import { Ingridient, Select } from '../../components';

function Tower({ towerPancake }) {
  function DrawTower() {
    return (
      <div>
        {towerPancake.map(({ fileName, id }, i) => (
          <Ingridient name={fileName} key={`${id}-${i}`} setIndex={i} />
        ))}
      </div>
    );
  }
  function welcomeMessage() {
    if (towerPancake.length <= 1) {
      return (
        <h4>
          <span>Let's start build</span>
          <br />
          <span className='style2'>Your amazing</span>
          <br />
          <span className='style1'>PANCAKE TOWER</span>
        </h4>
      );
    }
  }
  return (
    <div className='Tower'>
      <div className='Tower--title'>{welcomeMessage()}</div>
      <div>{DrawTower()}</div>
      <Select />
    </div>
  );
}
const enhance = connect(state => ({
  towerPancake: pancakeBuilder.selectors.getTower(state),
}));

export default enhance(Tower);
