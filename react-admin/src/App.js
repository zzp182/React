import './App.css';
import { BrowserRouter, Switch, Route , Router , HashRouter , Link } from 'react-router-dom';
import React from 'react';
// 引用组件
import Home from './views/Home'
import About from './views/About'

  class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {}
    }
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact component={Home}  path="/" />
            <Route exact component={About}  path="/about" />
          </Switch>
        </BrowserRouter> 
      )
    }
  }


export default App;
