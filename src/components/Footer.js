import React, { Component } from 'react';
import { Segment, Container, Grid, Icon, Header } from 'semantic-ui-react';

class Footer extends Component {
	render () {
		return (
			<Segment inverted vertical style={{ padding: '0' }}>
          <Container>
            <Grid divided inverted stackable centered>
              <Grid.Row textAlign="center" style={{ padding: '10 0' }}>
              	<Grid.Column as="a" href="https://newsapi.org/" textAlign="center">
	              	<Header as="h1"style={{ margin :10 }} color="blue">Powered By NewsAPI</Header>
	              </Grid.Column>
              </Grid.Row>
              	<Header as="h1" color="grey">Developed By<br/>Ansh Ved &nbsp; & &nbsp;Smit Mehta</Header>
              <Grid.Row textAlign="center">
            		<Grid.Column as="a" href="https://github.com/anshved/news-app" textAlign="center">
	            		{/* <Icon name='github square' size='huge'/> */}
	            	</Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
			)
	}
}


export default Footer;
