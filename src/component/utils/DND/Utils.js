import { useState } from 'react';

export function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return [() => setValue((value) => value + 1), value]; // update state to force render
}

const LocalStorageKey = 'croft-dashboard';

export function saveToLS(key, value) {
  // console.log("saveToLS", key, value)

  if (window.localStorage) {
    let oldData = window.localStorage.getItem(LocalStorageKey);
    if (!oldData) {
      oldData = {};
    } else {
      oldData = JSON.parse(oldData);
    }

    oldData[key] = value;

    window.localStorage.setItem(LocalStorageKey, JSON.stringify(oldData));
  }
}

export function loadFromLS(key) {
  console.log('loadFromLS', key);
  if (window.localStorage) {
    try {
      let oldData = window.localStorage.getItem(LocalStorageKey);
      if (!oldData) {
        oldData = {};
      } else {
        oldData = JSON.parse(oldData);
      }

      return oldData[key];
    } catch (e) {
      return undefined;
    }
  } else {
    console.error('window.localStorage is not available');
  }
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
