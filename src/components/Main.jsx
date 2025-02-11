/* eslint-disable react/react-in-jsx-scope */
import { Component } from "react";
import "../CSS/Main.css";
import { FaPlus } from "react-icons/fa";
import { FaEdit, FaWindowClose } from "react-icons/fa";

export default class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
    index: -1,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let { newTask } = this.state;
    const { tasks, index } = this.state;
    newTask = newTask.trim(); //trim() elimina os espaços do começo e do final
    if (tasks.indexOf(newTask) !== -1) return; // aqui ele esta usando como index de tasks o newTask, ou seja ele irá percorrer o array e se houver alguma ocorrencia ele irá retornar
    const newTasks = [...tasks];
    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: "",
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: [...newTasks],
        index: -1,
      });
    }
  };
  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };
  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      index,
      newTask: tasks[index],
    });
  };
  handleDelete = (e, index) => {
    const { tasks } = this.state; // aqui estou fazendo uma referencia ao array
    const newTasks = [...tasks]; //aqui estou fazendo uma copia do array
    newTasks.splice(index, 1); //aqui estou removendo com splice 1 item a partir do index fornecido
    this.setState({
      tasks: [...newTasks],
    });
  };
  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <h1>{newTask}</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} type="text" value={newTask} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}

              <span className="buttons">
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)} // aqui estou mandando o evento e o index para a função handleEdit, ambos vem do map
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li> // No react a prop key é usada para ajudar o React a identificar quais itens em uma lista foram alterados. é importante para otimizar a re-renderização e garantir que a interface seja atualizada corretamente
          ))}
        </ul>
      </div>
    );
  }
}
