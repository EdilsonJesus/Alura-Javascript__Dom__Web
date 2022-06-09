import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'


export const handleNovoItem = (evento) => {
    evento.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);
    const dataFormatada = data.format('DD/MM/YYYY');

    const dados = {
        valor,
        dataFormatada
    }
    
    const tarefasAtualizadas = [...tarefas , dados]
    const criaTarefa = Tarefa(dados);

    //Capitulo 02 - Aula 02
    // sessionStorage.setItem("tarefas", JSON.stringify(dados));


    // Capitulo 02 - Aula 05
    // Guardando a informação do objeto em um array
    
    //Capitulo 02 - Aula 04
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));   
    
    lista.appendChild(criaTarefa);
    input.value = " "
}

export const Tarefa = ({ valor, dataFormatada }) => {
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa
        

}