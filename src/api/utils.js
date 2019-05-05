import { getLocalStorageValue, setLocalStorage } from '../utils/localStorage';

const USER_LOCAL_STORAGE_KEY = 'USER';
const TODOS_LOCAL_STORAGE_KEY = 'TODOS';

export const getUserFromLocalStorage = () => {
  const user = getLocalStorageValue(USER_LOCAL_STORAGE_KEY);

  if (user) {
    console.log('👤 `user` read from local storage');
    return user;
  }

  return null;
};

export const setUserToLocalStorage = user => {
  console.log('👤 `user` written to local storage');
  setLocalStorage(USER_LOCAL_STORAGE_KEY, user);
};

export const getTodosFromLocalStorage = () => {
  const todos = getLocalStorageValue(TODOS_LOCAL_STORAGE_KEY);

  if (todos) {
    console.log('     - 📖 `todos` read from local storage');
    return JSON.parse(todos);
  }

  return null;
};

export const setTodosToLocalStorage = todos => {
  console.log('     - 🖊️ `todos` written to local storage');
  setLocalStorage(TODOS_LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

const randomMs = ({ min = 100, max = 1600 } = {}) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const delay = (ms = randomMs()) => {
  console.log(`     - ⏲️ delay was ${ms} ms`);
  return new Promise(resolve => setTimeout(resolve, ms));
};
