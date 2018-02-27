import React, {Component} from 'react'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
class Home extends Component {
    render(){
        return[
            <p key='1'>Home</p>,
            <p key='2'>This is the Home page</p>
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

 export default connect(mapStateToProps)(Home)