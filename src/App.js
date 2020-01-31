import React, {Component} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.submit = this.submit.bind(this);
  }
  changeName(event) {
    this.setState({name: event.target.value});
  }
  changeEmail(event) {
    this.setState({email: event.target.value});
  }
  submit() {
    let data = {
      name: this.state.name,
      email: this.state.email
    };
    // fetch('/create', {
    //   method: 'POST',
    //   // mode: 'CORS',
    //   changeOrigin: true,
    //   headers: {
    //     // 'Accept': 'application/json',
    //     // 'Access-Control-Allow-Origin': '*',
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then((result) => {
    //   return result.json();
    // }).then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log(error);
    // });

    axios.post('/create', { data }).then(res => {
      console.log(res.data);
    }).catch((error) => {
      console.log(error);
    });

    // fetch('/').then((result) => {
    //   return result.json();
    // }).then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="http://localhost:4000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <form onSubmit={this.submit}>
          <input type="text" name="name" className="form-control" defaultValue={this.state.name} onChange={this.changeName} placeholder="Name" />
          <input type="text" name="email" className="form-control" defaultValue={this.state.email} onChange={this.changeEmail} placeholder="Email" />
          <input type="button" defaultValue="Submit" className="btn btn-primary" onClick={this.submit} />
        </form>
      </div>
    );
  }
};
