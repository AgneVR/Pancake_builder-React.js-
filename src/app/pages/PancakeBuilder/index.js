import React from 'react';
import './index.scss';
import { Ingridients, Tower } from '../../components';

function PancakeBuilder() {
  return (
    <div className='PancakeBuilder'>
      <div className='PancakeBuilder--tower'>
        <Tower />
      </div>
      <div className='PancakeBuilder--ingridients'>
        <Ingridients />
      </div>
    </div>
  );
}

export default PancakeBuilder;
