import React, {Component} from 'react'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
class Category extends Component {
    render(){
        return[
            <p key='1'>Category</p>,
            <p key='2'>This is the Category page</p>
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

 export default connect(mapStateToProps)(Category)