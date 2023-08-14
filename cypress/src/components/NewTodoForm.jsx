/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <div>
      <input
        type="text" data-test="input"
        placeholer='new todo'
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={handleAction}>Add todo</button>
    </div>
  );
};

export default NewTodoForm;
