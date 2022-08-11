import { useState } from 'react';
import { ReactComponent as CheckIcon } from '../../assets/shared/icon-check.svg';
import { capitalize } from '../../utils';

import './inputDropDown.scss';

const InputDropDown = ({ data, onClick, selectedData, name }) => {
  const [selected, setSelected] = useState(selectedData);

  const handleSelect = (item, name) => {
    setSelected(item);
    onClick(item, name);
  };

  return (
    <div className="InputDropDown">
      {data.map((item) => (
        <div
          className="item"
          key={item}
          onClick={() => handleSelect(item, name)}
        >
          <span className="p-one">{item}</span>
          <CheckIcon
            className={capitalize(selected) === item ? 'icon checked' : 'icon'}
          />
        </div>
      ))}
    </div>
  );
};

export default InputDropDown;
