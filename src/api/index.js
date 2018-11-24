import { delay } from './helpers';
import { todos } from './data';

/*
  if(Math.random() > 0.5) {
    throw new Error('😢');
  }
*/

const api = {
  todos: {
    async list() {
      console.log('📞 api.todos.list called:');

      await delay();

      return todos;
    }
    /*
    async get(id) {
      console.log(`📞 api.todos.get called for id ${id}:`);

      await delay();

      return todos.find(todo => todo.id === id);
    }
    */
  }
};

export default api;
