import React, {Component} from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  // All dom event handles come with an event object
  // May need to bind the context too
  onInputChange(event){
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event){
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search a city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
