//  import { criaData } from "./criaData.js";


//  export const carregaTarefa = () => {
//      const lista = document.querySelector('[data-list]')
    
//      const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))||[]
    

//      lista.innerHTML = " "
//      tarefasCadastradas.forEach((tarefa) => {       
//          const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY') 
//          lista.appendChild(criaData(dia))
//      }) 
//  }
import { ordenaDatas, removeDatasRepetidas } from "../service/data.js"
import { criaData } from "./criaData.js"
export const carregaTarefa = () => { 
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))||[]

    lista.innerHTML = " "
    const dataUnicas = removeDatasRepetidas(tarefasCadastradas)
    ordenaDatas(dataUnicas)
    dataUnicas.forEach((dia) => {
        
        lista.appendChild(criaData(dia))
    })
}