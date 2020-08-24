import React, { Component } from 'react'
import API from '../../utils/API'
import Results from '../../components/savedPage/Results'

class Saved extends Component {

    state = {
        books: []
    }

    componentDidMount(){
        API.getBooks()
        .then(results => {
            this.setState({
                books: results.data
            })
        })
    }

    handleDelete = event => {
        event.preventDefault()
        let id = event.target.value
        API.deleteBook(id)
        .then(result => {
            const newBooks = this.state.books.filter(book => book._id !== id)
            this.setState({books: newBooks})
        })
    }

    render(){
        return (
            <>
                {this.state.books.length ? <Results handleDelete={this.handleDelete} books={this.state.books} /> : <>
                    <div className="grid-x grid-margin-x grid-padding-y searchTopCallout">
                        <div className="callout primary cell small-10 small-offset-1" id="topCallout">
                            <h3>Sorry, no results came back. Try saving some books first!</h3>
                        </div>
                    </div>
                </>}
            </>
        ) 
        

    }
}

export default Saved