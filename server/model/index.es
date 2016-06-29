import Redis from '../lib/redis'
// 使用全局变量挂载数据库，防止被热更新
const client = yog.redis || new Redis();
yog.redis = client;

export async function getTodos(userId) {
  let ret = await client.GET(userId);
  if (ret === undefined) {
    await setTodos(userId, [{
      text: 'Use Redux',
      completed: false,
      id: 0
    }]);
    ret = await client.GET(userId);
  }
  return ret;
}

export async function setTodos(userId, todos) {
  return await client.SET(userId, todos);
}

export async function deleteTodo(userId, id) {
  let todos = await getTodos(userId);
  todos = todos.filter(todo => todo.id !== id)
  return await setTodos(userId, todos);
}

export async function addTodo(userId, text) {
  const todos = await getTodos(userId);
  const nowId = todos[todos.length - 1];
  const todo = {
    id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    completed: false,
    text: text
  };
  todos.unshift(todo);
  await setTodos(userId, todos);
  return todo;
}

export async function setTodo(userId, id, text) {
  const todos = await getTodos(userId);
  const index = todos.findIndex(todo => todo.id === id);
  todos[index].text = text;
  await setTodos(userId, todos);
  return todos[index];
}

export async function completeTodo(userId, id) {
  const todos = await getTodos(userId);
  const index = todos.findIndex(todo => todo.id === id);
  todos[index].completed = !todos[index].completed;
  await setTodos(userId, todos);
  return todos[index];
}

export async function completeAll(userId) {
  const todos = await getTodos(userId);
  const areAllMarked = todos.every(todo => todo.completed)
  todos.forEach(todo => todo.completed = !areAllMarked)
  return await setTodos(userId, todos);
}

export async function clearCompleted(userId) {
  let todos = await getTodos(userId);
  todos = todos.filter(todo => !todo.completed)
  const ret = await setTodos(userId, todos);
  return todos;
}
