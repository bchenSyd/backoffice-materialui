import React from 'react'
import { Link, browserHistory } from 'react-router'

const naviBar = props=>(
    <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="pull-left navbar-toggle collapsed" data-toggle="collapse" data-target="#menuBar" aria-expanded="false" >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
                 <Link to='/'>
                    <div  className='logo'/>
                 </Link>
            </div>

            
            <div className="collapse navbar-collapse" id="menuBar">
              <ul className="nav navbar-nav">
                <li>
                    <Link to='settlements' activeClassName='active'>Settlements
                        <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li>
                   <Link to='transactions' activeClassName='active'>Transactions
                       <span className="sr-only">(current)</span>
                   </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
)

export default naviBar