import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={(e) => onToggle(e, task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          onClick={(e) => onDelete(e, task.id)}
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
