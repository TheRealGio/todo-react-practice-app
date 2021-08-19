const FIREBASE_DOMAIN = 'https://react-http-9edd7-default-rtdb.europe-west1.firebasedatabase.app/'

export async function getAllTodos() {
    const response = await fetch(FIREBASE_DOMAIN+'todos.json');
    const data = await response.json();

    if(!response.ok) {
        alert("Failed to fetch todos!")
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

export async function updateIsCompleted(todoId,isCompleted) {
    const response = await fetch(`${FIREBASE_DOMAIN}todos/${todoId}.json`,{
      method: 'PATCH',
      body: JSON.stringify({
        isCompleted: isCompleted,
      }),
      headers: {
        'Content-Type' : 'application/json',
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      alert("Could Not Update isCompleted");
    } 
 

    return null;
  }

  export async function updateTodo(todoId,title,description) {
    const response = await fetch(`${FIREBASE_DOMAIN}todos/${todoId}.json`,{
      method: 'PATCH',
      body: JSON.stringify({
        title: title,
        description:description,
      }),
      headers: {
        'Content-Type' : 'application/json',
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      alert("Could Not Update Todo");
    } 
 

    return null;
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

  export async function removeTodo(todoid) {
    const response = await fetch(`${FIREBASE_DOMAIN}todos/${todoid}.json`, {
      method: 'DELETE',
    });
    const data = await response.json();
  
    if (!response.ok) {
      alert("Could Not Delete Todo");
    }
    return null;
  }