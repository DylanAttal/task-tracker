import { useState } from 'react'

const AddTask = () => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  return (
    <form className='add-form'>
      <div className='form-control'>
        <label htmlFor='task'>Task</label>
        <input
          id='task'
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='day'>Day &amp; Time</label>
        <input
          id='day'
          type='text'
          placeholder='Add Day &amp; Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control-check'>
        <label htmlFor='reminder'>Set Reminder</label>
        <input
          id='reminder'
          type='checkbox'
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
