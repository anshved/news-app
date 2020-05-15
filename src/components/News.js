import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid, Image, Container, Dimmer, Loader, Pagination } from 'semantic-ui-react';
import  image  from './news-icon.png';
import  Footer  from './Footer';
import { PAGE_SIZE } from '../constants/constants';
import { changePage } from '../actions';


class News extends Component {

	render() {
		const { data,status } = this.props;
		if(status==="loading")
			return (
					<Dimmer active>
						<Loader />
					</Dimmer>	
		)
		else if(status==="success"){
			return (
			  <div>
				  <Grid centered celled='internally'>
				  <Grid.Column computer={12} mobile={16}>
					{/* <Container style={{padding:'20px'}}> */}
			        {data.articles.map((elem,index)=> (
							
				        	<Card href={elem.url} key={index} color="red" fluid centered raised>
							<Grid stackable celled='internally'>
								<Grid.Row>
				        		<Grid.Column width={11}>
								<Image
				        		bordered
				        		src={
				        			elem.urlToImage&&elem.urlToImage.substr(0,4)==="http"?elem.urlToImage:image
				        		}/>
								</Grid.Column>
								<Grid.Column width={5}>
								<Card style={{boxShadow : 'none'}} centered>
				        		<Card.Content>
				        			<Card.Header>{elem.title}</Card.Header>
				        			<Card.Meta textAlign="right">{elem.author}</Card.Meta>
				        			<Card.Description>{elem.description}</Card.Description>
				        		</Card.Content>
				        		<Card.Content textAlign="right" extra>
				        			{elem.source.name}
				        			<br/>
				        			{elem.publishedAt}
				        		</Card.Content>
								</Card>
								</Grid.Column>
								</Grid.Row>
							</Grid>
							</Card>
						
			        ))}
		       
		      {/* </Container> */}
			  </Grid.Column>
			  </Grid>

	        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
	          <Pagination
	            ellipsisItem={null}
	            inverted
	            totalPages={data.totalResults?Math.ceil(data.totalResults/PAGE_SIZE):3}
	            activePage={this.props.activePage}
	            onPageChange={(ev, { activePage }) => this.props.changePage(activePage) } />
	        </div>
	        <br/>		      
	        <Footer />
		    </div>
			)
		}
		else
			return null;
	}

}

const mapStateToProps = (state) => {
  return {
  	activePage: state.activePage,
  	data : state.data,
  	status : state.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (activePage) => dispatch(changePage(activePage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
