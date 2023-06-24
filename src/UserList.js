export default function UserList({$target, initialState, onSelect}){
    const $userList = document.createElement('div')
    $target.appendChild($userList)

    this.state = initialState

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $userList.innerHTML = `
            <h1>Users</h1>
            <ul>
                ${this.state.map(username => `<li data-username="${username}">${username}</li>`).join('')}
                <li>
                    <form>
                        <input class="new-User" type="text" placeholder="add username"></input>
                    </form>
                </li>
            </ul>
        `
    }

    this.render()

    $userList.addEventListener('click', (e) => {
        const $li = e.target.closest('li[data-username]')
        
        if($li){
            const {username} = $li.dataset
            
            onSelect(username)
        }
    })

    $userList.addEventListener('submit', e => {
        const $newUser = document.querySelector('.new-User')
        const $newUserValue = $newUser.value
        if($newUserValue.length > 0){
            onSelect($newUser.value)
            $newUserValue = ''
        }
    })
    
}