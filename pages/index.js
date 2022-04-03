import {useState} from 'react'

const Index = () => {

    const [input, setInput] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);      
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([
            input, ...todoList
        ])        
        setInput('')
    }

    const handleDelete = (todo) => {
        const updatedList = todoList.filter((element) => element != todo )
        setTodoList(updatedList);
    }

    return (
        <div>
            <h3> Next.js Todo list</h3>
            <form>
                <input type="text" value={input} onChange={handleChange}/> <button onClick={handleSubmit}> Submit </button>
            </form>
            <ul>
                {
                    todoList.length >= 1 
                    ? todoList.map((todo, index) => {
                        return(
                            <li key={index}> 
                            {todo} 
                            <button onClick={(e) => {
                                e.preventDefault()
                                handleDelete(todo)
                                }}> Delete                                
                            </button> </li>
                    )})  
                    : "Enter a todo item"
                }
                
            </ul>
        </div>
    )
}

export default Index;