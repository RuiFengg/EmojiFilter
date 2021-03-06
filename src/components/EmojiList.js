import React, { Component } from 'react'
import ListRow from './ListRow'
import Clipboard from 'clipboard'
import PropTypes from 'prop-types'
import { fetchData } from '../actions/dataActions'
import { connect } from 'react-redux'

class EmojiList extends Component {
    static propTypes = {
        filteredData: PropTypes.array
    }

    componentDidMount() {
        this.props.fetchData()
        this.clipboard = new Clipboard(".copy-to-clipboard")
    }

    componentWillUnmount() {
        this.clipboard.destroy()
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.filteredData.map(emoji =>
                    <ListRow
                        key={emoji.slug} 
                        symbol={emoji.character} 
                        description={emoji.unicodeName}
                    />
                )}
            </ul>
        )
    }
}
const mapStateToProps = state => ({
    filteredData: state.filteredData
})

export default connect(mapStateToProps, { fetchData })(EmojiList)
