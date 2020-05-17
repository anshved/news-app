import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid, Image, Container, Dimmer, Loader, Pagination } from 'semantic-ui-react';
import  image  from './electronics.png';
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
				  <Grid.Column  style={{ marginTop:'40px'}} computer={10} mobile={16}>
					{/* <Container style={{padding:'20px'}}> */}
			        {data.articles.map((elem,index)=> (
							
				        	<Card style={{borderRadius: 0, margin:'50px 0'}} href={elem.url} key={index} color="black" fluid centered raised>
							<Card.Content style={{borderBottom: '3px solid'}}>
							<Card.Header>{elem.title}</Card.Header>
							</Card.Content>
							<Grid centered stackable celled='internally'>
								<Grid.Row>
				        		<Grid.Column width={10}>
								<Image
				        		src={
				        			elem.urlToImage&&elem.urlToImage.substr(0,4)==="http"?elem.urlToImage:image
				        		}/>
								</Grid.Column>
								<Grid.Column width={5}>
								<Card style={{boxShadow : 'none'}} centered>
				        		<Card.Content>
				        			
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

	         <div style={{display:'flex',justifyContent:'center',alignItems:'center', margin: '-35px 0 45px 0'}}>
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

window.addEventListener('scroll',function(){
	if(window.scrollY + window.innerHeight + 100 >= document.documentElement.scrollHeight) {
		return {

		}
	}



	console.log(document.documentElement.scrollHeight);
	// console.log(window.scrollY + window.innerHeight);
})

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
