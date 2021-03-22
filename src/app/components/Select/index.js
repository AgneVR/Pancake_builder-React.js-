import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import pancakeBuilder from '../../../pancakeBuilder';
import './index.scss';

const customStyles = {
  control: (base, state) => ({
    ...base,
    fontFamily: 'Quicksand',
    backgroundColor: '#400427',
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    '&:hover': { borderColor: '#400427' },
    borderColor: '#400427',
    boxShadow: 'none',
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: '#400427',
    color: '#fff',
    boxShadow: 'none',
    '&:hover': { color: '#bc1074' },
  }),
};

function SelectPancake({ defaultPancakeType, pancakeTypes, changeDefaultPancakeType }) {
  const [optionValue, setOptionValue] = useState(null);

  return (
    <div className='custom-select'>
      <Select
        isSearchable={false}
        value={defaultPancakeType}
        onChange={e => setValue(e)}
        options={pancakeTypes}
        styles={customStyles}
      />
    </div>
  );

  function setValue(e) {
    setOptionValue(e.value);
    changeDefaultPancakeType(e.value);
  }
}

const enhance = connect(
  state => {
    return {
      defaultPancakeType: pancakeBuilder.selectors.getDefaultPancakeType(state),
      pancakeTypes: pancakeBuilder.selectors.getPankaceTypes(state),
    };
  },
  dispatch =>
    bindActionCreators(
      {
        changeDefaultPancakeType: pancakeBuilder.actions.changeDefaultPancakeType,
      },
      dispatch,
    ),
);

export default enhance(SelectPancake);

// {
//   /* <select onChange={e => setValue(e)}>
//         {pancakeTypes.map(({ value, label }) => {
//           if (value === defaultPancakeType) {
//             return (
//               <option defaultValue={value} key={value} value={value}>
//                 {label}
//               </option>
//             );
//           } else {
//             return (
//               <option key={value} value={value}>
//                 {label}
//               </option>
//             );
//           }
//         })}
//       </select> */
// }
