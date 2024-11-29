// Selecionando os elementos do DOM
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Função para adicionar tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Criando o item da lista
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Botão para marcar como concluído
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Concluir';
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
            completeButton.textContent = taskItem.classList.contains('completed') ? 'Desmarcar' : 'Concluir';
        });

        // Botão para excluir a tarefa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        // Adicionando os botões no item
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        // Adicionando a tarefa na lista
        taskList.appendChild(taskItem);

        // Limpando o campo de entrada
        taskInput.value = '';
    }
}

// Adicionando evento no botão
addTaskButton.addEventListener('click', addTask);

// Adicionando evento para pressionar Enter no campo de entrada
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
