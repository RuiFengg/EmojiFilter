import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import SearchInput from './Components/SearchInput'
import EmojiList from './Components/EmojiList'
import axios from 'axios'
import filterEmoji from './FilterEmoji'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
        FilteredData: [],
        CompleteData: []
    }
}

componentDidMount() {
    axios.get(`https://emoji-api.com/emojis?access_key=123412341234`)
        .then(response => {
            const FilteredData = filterEmoji(response.data, "", 20)
            this.setState({
              FilteredData: FilteredData,
              CompleteData: response.data
            })
        })
}

handleSearchChange = event => {
  this.setState( {
    FilteredData: filterEmoji(this.state.CompleteData, event.target.value, 20)
  })

}
  render() {
    const s = '\ud83d\ude00'
    return (
        <div className="container">
          <div className="row justify-content-center">
            
            <h3>
            title header {s}
            </h3>
          </div>
          <SearchInput textChange= {this.handleSearchChange}/>
          <EmojiList filteredData={this.state.FilteredData}/>
        </div>
    )
  }
}

export default App;
