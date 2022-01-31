import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task, i) => {
        return <Task key={i} task={task} onDelete={onDelete} />
      })}
    </div>
  )
}

export default Tasks
