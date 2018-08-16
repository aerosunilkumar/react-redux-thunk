import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

import {fetchPosts} from '../actions/postActions'
//ctrl+k ctrl+f formt sction

//From react native
//slr shorcut for stateless react component
//cccs react class with Constructor
//cc react class

//Auto Import

//From Pure to simple
//ctrl+shift+p
//pure it will convert to react component from sateless

//From Es6 snippets Destuctring
//dob

//From ImportCost

class HomeComponent extends Component {
 componentWillMount(){
     this.props.fetchPosts();
 }

 componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
        this.props.posts.unshift(nextProps.newPost);
    }
 }

    render() {
        // const { name } = this.state;
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>
                    {post.title}
                </h3>
                <p>
                    {post.body}
                </p>
            </div>
        ));

        return (
            <div>
                <h1>Welcome </h1>
                <h4>React Reduc thunk</h4>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

HomeComponent.propTypes={
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newPost:PropTypes.object
}


const mapStateToProps =state => ({
posts:state.postReducer.items,
newPost:state.postReducer.item,
})

export default connect(mapStateToProps,{fetchPosts}) (HomeComponent);
