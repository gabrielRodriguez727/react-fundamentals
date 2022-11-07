// Basic Forms with useRef

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {

  const inputRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    const userNameByRef = inputRef.current.value
    onSubmitUsername(userNameByRef)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input id="userName" name="userName" type="text" ref={inputRef} />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
