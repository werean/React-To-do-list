/* eslint-disable react/react-in-jsx-scope */
import { Component } from "react";
import "../CSS/Main.css";
import Form from "./Form";
import Tasks from "./Tasks";

export default class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks")); //aqui estou pegando o item tasks no local storage e armazenando na variavel tasks
    if (!tasks) return; //se não tiver nada em tasks, ele não faz nada
    this.setState({ tasks }); // se tiver, sele popula o estado do array com as tasks que ele encontrou no local storage
  }

  componentDidUpdate(prevProps, prevState) {
    //prevProps propriedades anteriores e prevState estado anterior
    const { tasks } = this.state;
    if (tasks === prevState.tasks) return; //aqui estou verificando se o array já foi populado, se não foi, não faz nada
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Se ele tiver sido alterado, eu crio/atualizo um item no localStorage com o nome de "tasks" e armazeno um JSON com o array de tasks.
  }

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
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />
        <Tasks
          tasks={tasks}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
