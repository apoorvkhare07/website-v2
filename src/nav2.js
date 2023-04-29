import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import logo from './static/logo.png';
import {BrowserRouter as Router, Link} from 'react-router-dom'


class TopNav extends Component {
  state = {
    scrolled: false,
    kaomoji_idx: localStorage.getItem("kaomoji_idx") || 0
  }

  kaomojis = [
    '[❛▽❛]ﾉﾟ',
    '(´•ᴗ•`)ノ', 
      '[ˇヮˇ]ﾉ',
      '(^◡^)ﾉﾟ',
      '[^ᴗ^]ﾉﾟ',
      '(◕ᴗ◕)◞*',
      '[◕ヮ◕]ﾉ',
      '(ˇ▽ˇ)◞*'
  ]

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
    localStorage.setItem('kaomoji_idx', (this.state.kaomoji_idx+1)%7)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 40) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  render() {
    const { scrolled } = this.state
    const pathname = window.location.pathname
    return (
      <Navbar className="top-nav-new" collapseOnSelect expand="lg"  variant="dark">
        { pathname === '/' ?
        <a className='kaomoji'>
        {this.kaomojis[this.state.kaomoji_idx]}
        </a> :
        <a href="/">
          <p className="navbar-brand-logo">apoorv_khare</p>
        </a>
        }

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
          </Navbar.Collapse>

          <Nav className='navbar_items'>

              {/* <a href="/about"> <u> about </u></a>
              <a href="/blogs"> <u> articles </u></a>
              <a href="/works"> <u> works </u></a> */}
              <a href="/about">  about </a>
              <a href="/blogs"> articles </a>
              <a href="/works">  works </a>
              <a target= "_blank" href = "" className='resume'> <span>résumé </span></a>

          </Nav>
    </Navbar>
  );
  }
}

export default TopNav;