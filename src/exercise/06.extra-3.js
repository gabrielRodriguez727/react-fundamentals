// Dynamic Forms
// 💯 Validate lower-case
// http://localhost:3000/isolated/final/06.extra-2.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [userName, setUserName] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(userName)
  }

  function handleChange(event) {
    const {value} = event.target
    setUserName(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} value={userName} />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default App
