import React, { Component } from 'react';
import { Segment, Container, Grid, Icon, Header } from 'semantic-ui-react';

class Footer extends Component {
	render () {
		return (
			<Segment inverted vertical style={{ padding: '0' }}>
          <Container>
            <Grid divided inverted stackable centered>
              <Grid.Row textAlign="center" style={{ padding: '0' }}>
              	<Grid.Column as="a" href="https://newsapi.org/" textAlign="center">
	              	<Header as="h4" style={{ marginTop: '30px' }} color="blue">Powered By NewsAPI</Header>
	              </Grid.Column>
              </Grid.Row>
              	<Header as="h4" style={{ margin: '10px 0 0 0' }} color="grey">Developed By <a target="_blank" href="https://anshved.github.io/">Ansh Ved</a>  &nbsp; & &nbsp; <a target="_blank" href="https://www.linkedin.com/in/smit-mehta-458a01190/">Smit Mehta</a></Header>
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
