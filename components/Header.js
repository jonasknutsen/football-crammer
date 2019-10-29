import React from 'react'

class Header extends React.Component {
  render = () => {
    return (
      <header>
        <h1>FOOTBALL CRAMMER</h1>
        <div className='tagline'>Plan you perfect London football holiday</div>
        <style jsx>{`
        header {
          background-color: rgb(86, 166, 106);
          padding: 1rem;
          text-align: center;
        } 
        h1 {
          margin: 0;
          letter-spacing: .7rem;
          color: #fff;
        }
        .tagline {
          color: #fff;
          letter-spacing: .2rem;
          font-weight: 600;
        }
      `}</style>
      </header>
    )
  }
}

export default Header
