import React, { Component, Fragment } from 'react';
import Friend from './Friend'
import axios from 'axios'
import { 
  Header,
  Grid,
  Item,
 } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Fragment>
      <Header as='h1' textAlign='center'>Home Component</Header>
      <Grid>
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={8}>
          <Item.Group>
            <Friend />
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { friend: state.friend, user: state.user }
}

export default Home
