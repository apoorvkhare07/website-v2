import React, {Component} from 'react';
import '../index.css';
import {Col, Row, Container} from 'react-bootstrap';
import ArticleList from '../articles-list.js'
import Post from '../components/Post'

class Blogs extends Component {
    render() {
      const postData = {
        'heading': 'HEAD',
        'description': 'DESC', 
        'tags': ['a', 'b']
      }
      return (
        <Container fluid className="banner">

                    <Col lg= {12} xs = {10} className="intro">
                      <Row className='subHead'>
                        
                        
                      </Row>
                      <Row>
                        I don't write much so I started this blog with the express goal of motivating myself to write more often. Here I write about my experience software development, my side projects (only the interesting ones) and my work in open-source.
                        <br/>
                        Also sometimes ramble about my exploits with life, philosophy and art.
                        <br /> <br /> <br /> 
                        <Row className='subHead'>
                        <h3> $ ~/recent writings </h3> 
                        
                      </Row>
                      <br /> <br /> 
                      </Row>
                        <div className='projectPanel'>
                          <Post postData={postData}/>
                          <Post postData={postData}/>
                          <Post postData={postData}/>
                          <Post postData={postData}/>
                          <Post postData={postData}/>
                          <Post postData={postData}/>
                        </div>
                    </Col>

            </Container>
    );
    }
  }

export default Blogs;