// Отримуемо посилання на дом елементи
const formEl = document.getElementById('add-form');
const taskListEl = document.getElementById('taskList');

// vishaemo sluhacha na formu
formEl.addEventListener('submit', addNewTask);
function addNewTask (event) {
    event.preventDefault();//зупиняє перезавантаження стороніки
   //отримуємо значення input
   const taskText = event.currentTarget.elements.text.value
    const newTaskEl = ` <li> 
        <input type="checkbox"/>
        <p></p>
        <button type="button">delete</button>
      </li>` //створюємо елемент списку

    event.currentTarget.reset();//очищує форму після submit
}