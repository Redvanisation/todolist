const ToDo = (() => {

    const createTodo = (description, priority=0, duedate, trash=false) => {
        return{description, priority, duedate, trash}
    }
   return{createTodo}

})();

export default ToDo