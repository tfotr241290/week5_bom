const input = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('ul')

input.focus();
button.addEventListener('click', () => {
    const myChapter  = input.value;
    input.value = '';

    if (myChapter === ""){
        alert("Please enter a Chapter first");
        return false;
    }

    const listChapter = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listChapter.appendChild(listText);
    listText.textContent = myChapter;
    listChapter.appendChild(listButton);
    listButton.textContent = '❌';
    listButton.ariaLabel = `Remove ${myChapter}`
    list.appendChild(listChapter);

    listButton.addEventListener('click', () => {
        list.removeChild(listChapter);
        input.focus();

    });


});