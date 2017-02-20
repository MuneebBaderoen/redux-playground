import React, { Component } from 'react';

export class TodoTextInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <input type='text'
        autoFocus='true'
        value={this.state.text}
        onChange={::this.handleChange}
        onKeyDown={::this.handleSubmit} />
    );
  }
}
