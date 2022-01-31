import Task from './Task'

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, i) => {
        return <Task key={i} task={task} />
      })}
    </div>
  )
}

export default Tasks
