import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import '../index.css';
import WorkTable from '../components/WorkTable'
import ProjectPanel from '../components/Projects.js';

class Works extends Component {
    render() {
        const projectData = [{
            'heading': 'HEAD',
            'description': 'DESC', 
            'tags': ['a', 'b']
          },
          // {
          //   'heading': 'HEAD',
          //   'description': 'DESC', 
          //   'tags': ['a', 'b']
          // },
          // {
          //   'heading': 'HEAD',
          //   'description': 'DESC', 
          //   'tags': ['a', 'b']
          // },
          // {
          //   'heading': 'HEAD',
          //   'description': 'DESC', 
          //   'tags': ['a', 'b']
          // },
          // {
          //   'heading': 'HEAD',
          //   'description': 'DESC', 
          //   'tags': ['a', 'b']
          // },
          // {
          //   'heading': 'HEAD',
          //   'description': 'DESC', 
          //   'tags': ['a', 'b']
          // },
        ]
    
        return (
            <Container fluid className="banner">
                <Col lg= {12} xs = {10} className="intro">
                <Row className='subHead'>
                        <h3> $ ~/work experience </h3> <br /><br />
                </Row>
                <div className='roles'>
                    <WorkTable />
                </div>
                <br />
                {/* <ProjectPanel projectData={projectData} /> */}
                </Col>
            </Container>
        )
    }
}

export default Works;
