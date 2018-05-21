import React, {Component} from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPrice} from "../actions/index";

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };

        // this.onInputChange = this.onInputChange.bind(this);

    }

    onInputChange(ev){
        let term = ev.target.value;
        this.setState({term});

    }

    onSubmit(e){
        e.preventDefault();

        this.props.fetchPrice(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form className="input-group mb-2" onSubmit={(e)=>this.onSubmit(e)}>
                <input
                placeholder="get current cryptocurrency price"
                className="form-control"
                value={this.state.term}
                onChange={(e)=>this.onInputChange(e)}
                required
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPrice}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
