const FIREBASE_DOMAIN = 'https://react-http-9edd7-default-rtdb.europe-west1.firebasedatabase.app/'

export async function getAllTodos() {
    const response = await fetch(FIREBASE_DOMAIN+'todos.json');
    const data = await response.json();

    if(!response.ok) {
        
    }

    const transformedTodos = [];

    for(const key in data){
        const todoObj = {
            id:key,
            ...data[key],
        };
        transformedTodos.push(todoObj);
    }
    return transformedTodos;
}

export async function getSingleTodo(todoId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/todos/${todoId}.json`);
    const data = await response.json();
  
    if (!response.ok) {
      alert("Could Not Fetch Todo!");
    }
  
    const loadedTodos = {
      id: todoId,
      ...data,
    };
  
    return loadedTodos;
  }

  export async function addTodo(todoData) {
    const response = await fetch(`${FIREBASE_DOMAIN}todos.json`, {
      method: 'POST',
      body: JSON.stringify(todoData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      alert("Could Not create Todo");
    }
  
    return null;
  }