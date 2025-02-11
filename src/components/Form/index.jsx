/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import "./Form.css";

export default function Form({ handleChange, handleSubmit, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={newTask} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
