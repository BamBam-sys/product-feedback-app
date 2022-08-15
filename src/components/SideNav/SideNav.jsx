import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectPlannedProductRequests,
  selectProductRequestsInProgress,
  selectLiveProductRequests,
} from './../../store/productRequestsSlice';
import { ReactComponent as CloseIcon } from '../../assets/shared/mobile/icon-close.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/shared/mobile/icon-hamburger.svg';

import './sideNav.scss';
import { useOnClickOutside } from '../../utils';

const SideNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const state = useSelector((state) => state);
  const planned = selectPlannedProductRequests(state);
  const inProgress = selectProductRequestsInProgress(state);
  const live = selectLiveProductRequests(state);

  const activeStyle = (isActive) => {
    console.log(isActive);
    return {
      style: isActive ? 'active' : '',
    };
  };

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [mobileMenu]);

  const [ref] = useOnClickOutside(mobileMenu, setMobileMenu);

  return (
    <div className={mobileMenu ? 'sideNav active' : 'sideNav'}>
      <div className="brand">
        <div className="left">
          <h2>Frontend Mentor</h2>
          <p className="p-two">Feedback Board</p>
        </div>

        <div className="icon" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <CloseIcon /> : <HamburgerIcon />}
        </div>
      </div>
      <div className="category">
        <NavLink className={`${activeStyle.style} link`} to={'/'}>
          All
        </NavLink>
        <NavLink className={`${activeStyle.style} link`} to={'/ui'}>
          UI
        </NavLink>
        <NavLink className={`${activeStyle.style} link`} to={'/ux'}>
          UX
        </NavLink>
        <NavLink className={`${activeStyle.style} link`} to={'/enhancement'}>
          Enhancement
        </NavLink>
        <NavLink className={`${activeStyle.style} link`} to={'/bug'}>
          Bug
        </NavLink>
        <NavLink className={`${activeStyle.style} link`} to={'/feature'}>
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
              <span>{planned.length}</span>
            </div>
            <div className="items">
              <li>
                <p className="p-one">In-Progress</p>
              </li>
              <span>{inProgress.length}</span>
            </div>
            <div className="items">
              <li>
                <p className="p-one">Live</p>
              </li>
              <span>{live.length}</span>
            </div>
          </ul>
        </div>
      </div>

      <div className="overlay"></div>

      {/* mobile */}
      <div className="mobileMenu" ref={ref}>
        <div className="category">
          <NavLink className={`${activeStyle.style} link`} to={'/'}>
            All
          </NavLink>
          <NavLink className={`${activeStyle.style} link`} to={'/ui'}>
            UI
          </NavLink>
          <NavLink className={`${activeStyle.style} link`} to={'/ux'}>
            UX
          </NavLink>
          <NavLink className={`${activeStyle.style} link`} to={'/enhancement'}>
            Enhancement
          </NavLink>
          <NavLink className={`${activeStyle.style} link`} to={'/bug'}>
            Bug
          </NavLink>
          <NavLink className={`${activeStyle.style} link`} to={'/feature'}>
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
                <span>{planned.length}</span>
              </div>
              <div className="items">
                <li>
                  <p className="p-one">In-Progress</p>
                </li>
                <span>{inProgress.length}</span>
              </div>
              <div className="items">
                <li>
                  <p className="p-one">Live</p>
                </li>
                <span>{live.length}</span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
