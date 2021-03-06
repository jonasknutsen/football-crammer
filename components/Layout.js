import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <div className='layout-wrapper'>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
    <style jsx global>{`
      html, body, #__next, .layout-wrapper {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: 300;
        background-color: #fff;
        font-size: 16px;
      }
      .layout-wrapper {
        display: flex;
        flex-direction: column;
      }
      main {
        display: flex;
        flex: 1;
        padding: 1rem
      }
      a {
        color: rgb(111, 160, 191);
        text-decoration: none;
      }
      a:hover {
        color: rgb(242, 183, 5);
      }
      ul {
        padding: 0;
        margin: 0;
      }
      li {
        list-style: none;
      }
      h1, h2, h3 {
        font-weight: 200;
        letter-spacing: .1rem;
        margin-top: 0;
        color: rgb(61, 37, 11);
      }
      .form-wrapper {
        display: flex;
        flex-direction: column;
      }
  `}</style>
  </div>
)

Layout.propTypes = {
  children: PropTypes.object
}

export default Layout
