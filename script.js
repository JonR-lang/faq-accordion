const question = Array.from(document.querySelectorAll('.question'))
const answer = Array.from(document.querySelectorAll('.answer'))
console.log(question)


question.forEach(item => {
    item.addEventListener('click', (e) => {
        let panel = item.nextElementSibling
        question.forEach(questo => {
            if (questo !== item) {
                questo.classList.remove('active')
            }
        })
        answer.forEach(element => {
            if (element !== panel) {
                element.classList.remove('active')
                
            }
        })
        item.nextElementSibling.classList.toggle('active')
        item.classList.toggle('active')
       
    })

});

