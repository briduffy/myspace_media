import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  Item,
  Header
} from 'semantic-ui-react'

class Friend extends React.Component {
  state = {friends: [] }

  componentDidMount() {
    axios.get('/api/friends')
    .then ( res => this.setState({ friends: res.data}) )
  }

  sample = () => {
    const { friends } = this.state
    if (friends.length) {
      const index = Math.floor(Math.random() * friends.length)
      return friends [index]
    } else {
      return null
    }
  }

  render() {
    const friend = this.sample()
    if (friend) {
      return(
        <Item key={friend.id}>
          <Item.Content>
            <Item.Meta>{friend.name}</Item.Meta>
            <Item.Meta as='h3'>{friend.location}</Item.Meta>
            <Item.Meta as='h3'>{friend.occupation}</Item.Meta>
            <Item.Meta as='h4'>
              <span>
                {friend.age} - {friend.gender}
              </span>
            </Item.Meta>
            <Item.Description as='h2'>{friend.quote}</Item.Description>
            <Item.Extra></Item.Extra>
          </Item.Content>
        </Item>
      )
    } else {
      return <Header textAlign="center">You have too many friends!</Header>
    }
  }
}

export default connect()(Friend)