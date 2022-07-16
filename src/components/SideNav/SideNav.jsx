import React from 'react';
import './sideNav.scss';
import { Link, NavLink } from 'react-router-dom';

const SideNav = () => {
  const navStyle = (isActive) => {
    console.log(isActive);
    return {
      style: isActive ? 'active' : '',
    };
  };
  return (
    <div className="sideNav">
      <div className="brand">
        <h2>Frontend Mentor</h2>
        <p className="p-two">Feedback Board</p>
      </div>
      <div className="category">
        <NavLink className={`${navStyle.style} link`} to={'/'}>
          All
        </NavLink>
        <NavLink className={`${navStyle.style} link`} to={'/ui'}>
          UI
        </NavLink>
        <NavLink className={`${navStyle.style} link`} to={'/ux'}>
          UX
        </NavLink>
        <NavLink className={`${navStyle.style} link`} to={'/enhancement'}>
          Enhancement
        </NavLink>
        <NavLink className={`${navStyle.style} link`} to={'/bug'}>
          Bug
        </NavLink>
        <NavLink className={`${navStyle.style} link`} to={'/feature'}>
          Feature
        </NavLink>
      </div>
      <div className="roadmap">
        <div className="top">
          <h3>Roadmap</h3>
          <p className="p-three">
            <Link to="/roadmap" className="link">
              View
            </Link>
          </p>
        </div>
        <div className="bottom">
          <ul>
            <div className="items">
              <li>
                <p className="p-one">Planned</p>
              </li>
              <span>2</span>
            </div>
            <div className="items">
              <li>
                <p className="p-one">In-Progress</p>
              </li>
              <span>3</span>
            </div>
            <div className="items">
              <li>
                <p className="p-one">Live</p>
              </li>
              <span>1</span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
