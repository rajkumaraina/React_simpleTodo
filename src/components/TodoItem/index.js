import './index.css'

const TodoItem = props => {
  const {item, deleteButton} = props
  const {id, title} = item
  const deleteClick = () => {
    deleteButton(id)
  }
  return (
    <li className="listContainer">
      <p className="para">{title}</p>
      <button className="button" onClick={deleteClick}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
