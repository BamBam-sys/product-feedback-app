import { useState } from 'react';
import { ReactComponent as CheckIcon } from '../../assets/shared/icon-check.svg';

import './inputDropDown.scss';

const InputDropDown = ({ categories, onClick, selectedCategory }) => {
  const [selected, setSelected] = useState(selectedCategory);

  const handleSelect = (category) => {
    setSelected(category);
    onClick(category);
  };

  return (
    <div className="InputDropDown">
      {categories.map((category) => (
        <div
          className="category"
          key={category}
          onClick={() => handleSelect(category)}
        >
          <span className="p-one">{category}</span>
          <CheckIcon
            className={selected === category ? 'icon checked' : 'icon'}
          />
        </div>
      ))}
    </div>
  );
};

export default InputDropDown;
