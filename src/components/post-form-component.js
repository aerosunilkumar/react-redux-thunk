import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import  {createPost} from '../actions/postActions'
class PostFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const post={
            title:this.state.title,
            body:this.state.body
        }
        this.props.createPost(post);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h1>
                        Create Post
                </h1>
                    <label>
                        Title
                </label>
                <br />                
                    <input type="text" name="title" onChange={this.onChange} />
                    <br />
                    <label>
                        Body
                </label>
                <br />                
                    <input type="text" name="body" onChange={this.onChange} />
                    <br />
                    <button type="submit">Create</button>
                </form>
            </div>
        );
    }
}

PostFormComponent.propTypes={
    createPost:PropTypes.func.isRequired
}

const mapPropToState = state =>({

})
export default connect(mapPropToState,{createPost})(PostFormComponent);