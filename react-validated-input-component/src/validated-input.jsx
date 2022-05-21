import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.state = {
      password: null
    };
  }

  validate(event) {
    const passwordLength = event.target.value.length;
    if (passwordLength >= 8) {
      this.setState({ password: true });
    } else if (passwordLength === 0) {
      this.setState({ password: null });
    } else if (passwordLength < 7) {
      this.setState({ password: false });
    }
  }

  render() {
    let hidden = '';
    let hideShort = 'hidden';
    let hideRequired = '';
    let success = 'hidden';

    if (this.state.password === false) {
      hidden = '';
      hideShort = '';
      hideRequired = 'hidden';
    } else if (this.state.password) {
      hidden = 'hidden';
      hideShort = 'hidden';
      hideRequired = 'hidden';
      success = '';
    }
    return (
      <div id="div-form">
        <form action="submit" onChange={this.validate}>
          <div><label htmlFor="password">
            Password
          </label></div>
            <input type="password" />
          <i className={`fa-solid fa-x incorrect ${hidden}`}></i>
          <i className={`fa-solid fa-check correct ${success}`}></i>
          <div>
            <p className={hideRequired}>A password is required.</p>
            <p className={hideShort}>Your password is to short.</p>
          </div>
        </form>
      </div>
    );
  }
}
