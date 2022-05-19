import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit} action="submit">
        <label htmlFor="username">Username
            <input value={this.state.username} onChange={this.handleUsernameChange} type="text" name="username" />
        </label>
        <label htmlFor="password">Password
            <input value={this.state.password} onChange={this.handlePasswordChange}type="password" name="password" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<CustomForm />);
