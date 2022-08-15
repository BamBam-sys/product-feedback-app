import { ReactComponent as SuggestionIcon } from '../../assets/suggestions/icon-suggestions.svg';
import { ReactComponent as ArrowIconUp } from '../../assets/shared/icon-arrow-up.svg';
import { ReactComponent as ArrowIconDown } from '../../assets/shared/icon-arrow-down.svg';
import { ReactComponent as CheckIcon } from '../../assets/shared/icon-check.svg';

import './nav.scss';
import { AddFeedbackBtn, GoBack } from '../../common';
import { useState } from 'react';
import { useOnClickOutside } from '../../utils';

const Nav = ({ sortedSuggestions, sortSuggestions, component }) => {
  const [dropdown, setDropdown] = useState(false);
  const [sortTitle, setSortTitle] = useState('Most Upvotes');
  const [checked, setChecked] = useState({
    li1: true,
    li2: false,
    li3: false,
    li4: false,
  });

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  // close component when there is a click outside the component
  const [ref] = useOnClickOutside(dropdown, setDropdown);

  const handleSort = (param, sortBy, title, el) => {
    setChecked((prev) => {
      for (const property in prev) {
        prev[property] = false;
      }
      return { ...prev, [el]: !prev.el };
    });

    // setDropdown(!dropdown);
    setSortTitle(title);
    sortSuggestions(param, sortBy);
  };

  const navPadding =
    component === 'roadmap'
      ? { padding: '2.7rem 3.2rem' }
      : { padding: '2.4rem' };

  return (
    <div className="nav" style={navPadding}>
      {component === 'roadmap' ? (
        <div className="roadmapNavItem">
          <GoBack />
          <h1>Roadmap</h1>
        </div>
      ) : (
        <>
          <div className="navItem suggestion">
            <SuggestionIcon className="icon" />
            <div className="count">
              <h3>{sortedSuggestions.length} Suggestions</h3>
            </div>
          </div>

          <div className="navItem menu" ref={ref}>
            <div className="sort" onClick={handleDropdown}>
              <p>Sort by </p> <span>&#58;</span> <h4>{sortTitle}</h4>
              <span>
                {dropdown ? (
                  <ArrowIconUp className="icon" />
                ) : (
                  <ArrowIconDown className="icon" />
                )}
              </span>
            </div>
            {dropdown ? (
              <div className="dropdown">
                <ul>
                  <li
                    onClick={() =>
                      handleSort('upvotes', 'desc', 'Most Upvotes', 'li1')
                    }
                  >
                    <p className="p-one">Most Upvotes</p>
                    <CheckIcon
                      className={checked.li1 ? 'icon checked' : ' icon'}
                    />
                  </li>
                  <li
                    onClick={() =>
                      handleSort('upvotes', 'asc', 'Least Upvotes', 'li2')
                    }
                  >
                    <p className="p-one">Least Upvotes</p>
                    <CheckIcon
                      className={checked.li2 ? 'icon checked' : ' icon'}
                    />
                  </li>
                  <li
                    onClick={() =>
                      handleSort(
                        'commentsCount',
                        'desc',
                        'Most Comments',
                        'li3'
                      )
                    }
                  >
                    <p className="p-one">Most Comments</p>
                    <CheckIcon
                      className={checked.li3 ? 'icon checked' : 'icon'}
                    />
                  </li>
                  <li
                    onClick={() =>
                      handleSort(
                        'commentsCount',
                        'asc',
                        'Least Comments',
                        'li4'
                      )
                    }
                  >
                    <p className="p-one">Least Comments</p>
                    <CheckIcon
                      className={checked.li4 ? 'icon checked' : 'icon'}
                    />
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </>
      )}

      <div className="btn">
        <AddFeedbackBtn />
      </div>
    </div>
  );
};

export default Nav;
