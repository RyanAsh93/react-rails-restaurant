import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import TitleForm from './components/TitleForm';
import TitleList from './components/TitleList';
import axios from 'axios';

class App extends Component {
  state = { titles: [] };
  
  componentDidMount() {
    axios.get("/api/menus")
    .then( res => {
      this.setState({ titles: res.data });
    })
    .catch( err => {
      console.log(err);
    })
  }

  addMenu = (name) => {
    axios.post('/api/menus', { name })
    .then( res => {
      const { titles } = this.state;
      this.setState({ titles: [...titles, res.data ]});
    })
  }

  updateTitle = (id) => {
    axios.put(`/api/menus/${id}`)
    .then( res => {
      const titles = this.state.titles.map( t => {
        if (t.id === id)
        return res.data;
        return t;
      })
      this.setState({ titles })
    })
  }

  deleteTitle = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const { titles } = this.state;
      this.setState({ titles: titles.filter(t => t.id !== id)})
    })
  }

  render() {
    return (
      <Container style={{ padding: "30px 0" }}>
        <TitleForm addMenu={this.addMenu} />
        <h1>Menus</h1>
        <TitleList 
        titles={this.state.titles}
        updateTitle={this.updateTitle} 
        deleteTitle={this.deleteTitle} 
         />
      </Container>
    )
  }

}

export default App;
