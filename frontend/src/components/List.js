const List = ( {todos, deleteTodo} ) => {
    const complete = (id) =>{
        deleteTodo(id);
    }
    return (
        <div>
            {todos.map(todo => {
                return (
                    <>
                    <div key={todo.id}>
                        <button onClick={ () => complete(todo.id)}>Done</button>
                        <span>{todo.content}</span>
                    </div>
                    </>
                )
            })}
        </div>
    )
}

export default List;
