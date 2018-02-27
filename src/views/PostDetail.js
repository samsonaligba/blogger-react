import React, {Component} from 'react'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
class PostDetail extends Component {
    render(){
        return[
            <p key='1'>PostDetail</p>,
            <p key='2'>This is the Post page</p>
        ]
    }
}

const mapStateToProps = state => ({
    categories: state.getPosts
 });

 /*
 const mapDispatchToProps = state => ({
    dispatch,
    fetchData: () => dispatch(fetchCategories())
 });*/

 export default connect(mapStateToProps)(PostDetail)