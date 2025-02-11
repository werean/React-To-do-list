/* eslint-disable react/react-in-jsx-scope */
import { FaEdit, FaWindowClose } from "react-icons/fa";
import "./Tasks.css";
import PropTypes from "prop-types";
export default function Tasks({ tasks, handleDelete, handleEdit }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={index}>
          {task}

          <span className="buttons">
            <FaEdit
              onClick={(e) => handleEdit(e, index)} // aqui estou mandando o evento e o index para a função handleEdit, ambos vem do map
              className="edit"
            />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li> // No react a prop key é usada para ajudar o React a identificar quais itens em uma lista foram alterados. é importante para otimizar a re-renderização e garantir que a interface seja atualizada corretamente
      ))}
    </ul>
  );
}
Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleDelete: PropTypes.handleDelete,
  handleEdit: PropTypes.handleEdit,
};
