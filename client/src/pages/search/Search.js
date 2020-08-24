import React, { Component } from 'react'
import Form from '../../components/searchPage/Form'
import './style.css'
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
    }

    handleFormSubmit = event => {
        event.preventDefault()
        API.getGoogleBooks(this.state.query)
        .then(results => {
            if (results){
                console.log(results.data)
                this.setState({
                    books: results.data, query: ''
                })
            } else {
                console.log('no results')
            }
        })
    }

    handleSave = event => {
        // event.preventDefault()
        console.log(JSON.parse(event.target.value))
        API.saveBook(JSON.parse(event.target.value))
        .then(results => {
            console.log(results)
        })
    }

    render() {
        return (
            <>
                <Form 
                    handleInputChange={this.handleInputChange} 
                    handleFormSubmit={this.handleFormSubmit} 
                />
                {this.state.books.length ? <Results save={this.handleSave} books={this.state.books} /> : <></>}
            </>
        )
    }    
}

export default Search