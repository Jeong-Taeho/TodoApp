export default function TodoList( {$target, initialState, onToggle, onRemove } ){
    const $todo = document.createElement('div')

    $target.appendChild($todo)

    //  {
    //     todos : []
    //   }
    this.state = initialState

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        if(this.state.length === 0){
            $todo.innerHTML = '할 일 목록이 없습니다.'
            return
        }

        $todo.innerHTML = `
            <ul>
                ${this.state.map(({ _id, content, isCompleted}) => 
                    `<li data-id=${_id} class='todo-Item'>
                        ${isCompleted ? `<s>${content}</s>` : content}
                        <button class='remove'>삭제</button>
                    </li>`
                ).join('')}
            </ul>
        `
    }

    $todo.addEventListener('click', (e) => {
        const $li = e.target.closest('.todo-Item')

        if($li){
            const {id} = $li.dataset

            const {className} = e.target
            if(className === 'remove'){
                onRemove(id)
            }else{
                onToggle(id)
            }
        }
    })

    this.render()
}