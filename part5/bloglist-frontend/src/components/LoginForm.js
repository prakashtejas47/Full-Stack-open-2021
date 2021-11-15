import react from "react"

const LoginForm = ({handleLogin,Notification,errorMessage,username,setUsername,password,setPassword})=>(
    <div>
    <form onSubmit={handleLogin}>
      <Notification message={errorMessage} />
          <h2>Log in to application</h2>
          <div>
            username
              <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
              <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>
    </div>
  )


  export default LoginForm;