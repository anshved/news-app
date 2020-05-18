import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Segment, Container, Flag, Dropdown, Menu, Pagination } from 'semantic-ui-react';

import { countries } from './constants/countryList';
import { categories } from './constants/categories';
import  image  from './components/electronics.png';
import errImg from './nonews.png';
import { URL, PAGE_SIZE } from './constants/constants';
import { itemsFetchData, changeCountry, changeCategory, changePage } from './actions';
import News from './components/News';
import styles from './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchData(URL+"country="+this.props.country+"&category="
      +this.props.category+"&pageSize="+PAGE_SIZE
      +"&page="+this.props.activePage+"&apiKey=940ebc582b1e4205b64ed083e998e723")
  }

  componentDidUpdate(prevProps) {
    if(this.props.country!==prevProps.country
      ||this.props.category!==prevProps.category
      ||this.props.activePage!==prevProps.activePage) {
        this.props.fetchData(URL+"country="+this.props.country+"&category="
          +this.props.category+"&pageSize="+PAGE_SIZE
          +"&page="+this.props.activePage+"&apiKey=940ebc582b1e4205b64ed083e998e723")
    }
  }


  render() {
    if(this.props.status!=="error") {
      return (
      <div style={{
        //  backgroundImage:'url("https://convertingcolors.com/plain-222627.svg")',
        flex:'1', backgroundAttachment:"fixed"}}
        // http://sf.co.ua/13/05/wallpaper-325211.jpg
        >
          {/* <Segment style={{borderRadius: 0, position: 'fixed', width: '100%', zIndex:10}} inverted> */}
        <Menu style={{borderRadius: 0, position: 'fixed', width: '100%', zIndex:10}} fluid widths={9} inverted pointing>
            <Menu.Item as='a' href="#" header>
              <Image
                src={image}
                size="mini"
                style={{ marginRight: '1em' }}
              />
              News Alert
            </Menu.Item>
            {/* <Dropdown
              openOnFocus
              inline item placeholder='Category'
              options={ categories } 
              onChange = {(ev, {value} ) => this.props.changeCategory(value) } 
            /> */}
            {categories.map( data  => (
              
               <Menu.Item onClick={() => {this.props.changeCategory(data.value);}}>{data.text}</Menu.Item>
             
             ))}

             {/* <Flag style={{position:'relative', padding:'50px'}} name='myanmar' /> */}
            <Dropdown style={{position:'relative'}}
              icon={this.props.flag}
              inverted
              openOnFocus
              inline item placeholder='Country' 
              value={this.props.country} options={ countries }
              onChange = {(ev, {value} ) => this.props.changeCountry(value)}
            />
           
         
        </Menu>
        {/* </Segment> */}
        {/* <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Pagination
            style={{visibility:this.props.status==="loading"?'hidden':'visible'}}
            activePage={this.props.activePage}
            ellipsisItem={null}
            inverted
            totalPages={this.props.totalResults?Math.ceil(this.props.totalResults/PAGE_SIZE):3}
            onPageChange={(ev, { activePage }) => this.props.changePage(activePage) } />
        </div> */}
        <News />
      </div>  
      );
    }
    else {
        return (
          <div style={{marginTop:'10px',
            display:'flex',flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'}}
          >
            <Image src={errImg} size="big" centered />
            <h1 style={{textAlign:'center'}}><br/>No News Available as some error has occured !! </h1>
          </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.status,
    totalResults: state.data.totalResults,
    country: state.country,
    category: state.category,
    activePage: state.activePage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCountry: (countryName) => dispatch(changeCountry(countryName)),
    changeCategory: (categoryName) => dispatch(changeCategory(categoryName)),
    changePage: (activePage) => dispatch(changePage(activePage)),
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
