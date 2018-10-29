import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import { Panel, PanelGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import HomeComponent from './components/home-component';
import PostFormComponent from './components/post-form-component';
import store from './store/index'
class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: '1',
      data: [
        {
          content: "1",
          data: [
            {
              content: "2",
              data: [
                {
                  content: "3"
                }
              ]
            },
            {
              content: "4",
              data: [
                {
                  content: "5"
                }
              ]
            }
          ]
        },
        {
          content: "6",
          data: [
            {
              content: "7",
              data: [
                {
                  content: "8"
                }
              ]
            },
            {
              content: "9",
              data: [
                {
                  content: "10"
                }
              ]
            }
          ]
        }
      ]
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  createPanelGroup(data) {
    return (<PanelGroup
      accordion
      onSelect={this.handleSelect}
    >
      {this.createPanel(data)}
    </PanelGroup>)
  }

  createPanel(data) {
    return (<Panel eventKey={data.content}>
      <Panel.Heading>
        <Panel.Title toggle>{data.content}</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
        {data.data ? data.data.map(innerData => {
          return innerData.data ? this.createPanelGroup(innerData): innerData.content;
        }
        ):data.data.content}
      </Panel.Body>
    </Panel>)
  }

  render() {
    const panels = this.state.data.map(data => this.createPanelGroup(data));
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {panels}
        <PostFormComponent />        
        <HomeComponent />
      </div>
      </Provider>
      
    );
  }
}

export default App;
