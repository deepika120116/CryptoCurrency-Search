import React from 'react';

const Header = ({handleSearch}) => {
    return (
      <div className='headerContent'>
      <div className="p-5" style={{position:"relative", top:"50%",left:"50%"}}>
          <h2 style={{position:"absolute",transform:"translate(-50%,-50%)"}}>CryptoCurrency Tracker</h2>
      </div>
          <div className="row justify-content-center">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-4">
                    <input className="form-control me-2 mb-5" type="search" placeholder="Search..."
                        aria-label="Search" onChange={handleSearch}/>
              </div>
          </div>
      </div>
  )
}

export default Header