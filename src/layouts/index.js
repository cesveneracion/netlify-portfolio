import React, { Component } from 'react';
import Helmet from 'react-helmet';
require('font-awesome/css/font-awesome.css')
import 'bulma';
import './index.scss';

//Components
import Header from '../components/header/';
import Footer from '../components/footer/';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteTitle: 'Tim Smith',
      siteNav:[
        {label:'About', href:'/about'},
        {label:'Work', href:'/work'}
      ],
      socialMedia: [
        {icon:'codepen', href:'http://codepen.io/iamtimsmith/'},
        {icon:'linkedin', href:'https://www.linkedin.com/in/tim-smith-1a651aa0'},
        {icon:'twitter', href:'https://twitter.com/iam_timsmith'},
        {icon:'github', href:'https://github.com/iamtimsmith'}
      ]
    }
  }

  render() {
    return (
      <div>
        <Helmet
          title={this.state.siteTitle}
          meta={[]} />
        <div className='content'>
          <Header 
            title={this.state.siteTitle}
            nav={this.state.siteNav}
            social={this.state.socialMedia}
             />


          { this.props.children({...this.props, 
            title:this.state.siteTitle,
          }) }

          <Footer
            title={this.state.siteTitle}
            nav={this.state.siteNav}
            social={this.state.socialMedia}
           />
        </div>
      </div>
    )
  }
}
