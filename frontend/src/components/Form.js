import { useState } from "react";

const Form = ( {createTodo} ) => {
    // 入力欄の監視用
    const [ enterTodo, setEnterTodo ] = useState("");
    // 追加
    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id:Math.floor(Math.random() * 1e5),
            content: enterTodo,
        };
        createTodo(newTodo);
        setEnterTodo("");
    }
    return (
        <div>
            <form onSubmit={addTodo}>
            <input type="text" value={enterTodo} onChange={ (e) => setEnterTodo(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
            </form>
        </div>
    )
}

export default Form;