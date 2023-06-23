import Header from "./Header.js"
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"
import { request } from "./api.js"

export default function App({$target}){

    this.state = {
        username : 'roto',
        todos : []
    }

    new Header({
        $target,
        initialState : this.state.username
    })

    new TodoForm({
        $target,
        onSubmit: (content) => {
            alert(content)
        }   
    })

    const todoList = new TodoList({
        $target,
        initialState : this.state.todos,
        onToggle: (id) => {
            alert(`${id} 토글예정`)
        },
        onRemove: (id) => {
            alert(`${id} 삭제예정`)
        }
    })

    const init = async () => {
        const {username} = this.state

        if(username){
            const todos = await request(`/${username}`)
            console.log(todos)
        }
    }

    init()
}