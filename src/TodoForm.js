export default function TodoForm( {$target, onSubmit} ){

    const $form = document.createElement('form')

    $target.appendChild($form)

    this.render = () => {
        $form.innerHTML = `
        <input type="text" placeholder="할 일을 입력해주세요"></input>
        <button>추가하기</button>
        `
    }

    $form.addEventListener('click', (e) => {
        e.preventDefault()
        
        const $input = $form.querySelector('input')
        const content = $input.value
        if(content.length > 0){
            onSubmit(content)
            $input.value = ''
        }
    })

    this.render()
}