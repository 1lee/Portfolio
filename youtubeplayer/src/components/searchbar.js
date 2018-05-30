import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

    this.state = { searchTerm: ''};//initialize state
}//END constructor

    render() {
        return(
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Quicktube</a>
    </div>
    <form className="navbar-form" role="search">
      <div className="searchbar form-group">
      <input
          value={this.state.searchTerm}
          onChange={ event => this.onInputChange(event.target.value)}
          placeholder="   Search" />
      </div>
    </form>




  </nav>



        );//END return
    };//END render

onInputChange(searchTerm){
    this.setState( {searchTerm} );
    this.props.onSearchTermChange(searchTerm);
}//END onInputChange

}//END SearchBar
export default SearchBar;
