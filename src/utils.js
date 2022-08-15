import { useRef, useEffect } from 'react';

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const useOnClickOutside = (component, toggleComponent) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (component && ref.current && !ref.current.contains(e.target)) {
        toggleComponent(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [component, toggleComponent]);

  return [ref];
};

export const validate = (input) => {
  const errors = {};

  const {
    data: { title, description },
  } = input;

  if (title.trim() === '') errors.title = `can't be empty`;

  if (description.trim() === '') errors.description = `can't be empty`;

  return Object.keys(errors).length === 0 ? null : errors;
};
