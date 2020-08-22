import React, { Component } from 'react'
import Form from '../../components/searchPage/Form'
import './style.css'
import Title from '../../components/searchPage/Title'
import Results from '../../components/searchPage/Results'
import API from '../../utils/API'

class Search extends Component {

    state = {
        books: [],
        query: '',
        title: '',
        authors: [],
        description: '',
        image: '',
        link: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        console.log(this.state.query)
    }

    handleFormSubmit = event => {
        event.preventDefault()
        API.getSearch(this.state.query)
        .then(results => {
            
            console.log(results.data.items)
            this.setState({
                books: results.data.items, query: ''
            })
            
        })
    }



    render() {
        return (
            <>
                <Title />
                <Form 
                    handleInputChange={this.handleInputChange} 
                    handleFormSubmit={this.handleFormSubmit} 
                />
                {this.state.books.length ? <Results books={this.state.books} /> : <></>}

            </>
        )
    }
    
}

export default Search