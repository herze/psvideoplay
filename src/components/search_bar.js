import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state= {
            term: ''
        };
    }

    render(){
        return(
            <div>
            <input onChange = {event=>this.handleOnChangeInput(event.target.value)} />
            value of input: {this.state.term}
            </div>
        )
    }

    handleOnChangeInput(term){
        console.log(''+term);
        this.setState({
            term
        })
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;