import React from 'react'
import { Form } from 'semantic-ui-react'

class TitleForm extends React.Component {
  state = { name: "" };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMenu(this.state.name);
    this.setState({ name: "" });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label="Menu Title"
          placeholder="Add A Menu Title"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Button>ADD ME!!</Form.Button>
      </Form>
    )
  }
}

export default TitleForm;