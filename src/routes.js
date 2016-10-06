import React, {Component} from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import NaviBar from './common/naviBar'
import Home from './home'
import Settlements from './settlements'
import SettlementDetails from './settlements/settlementDetails'
import Transactions from './transactions'
import TransactionDetails from './transactions/transactionDetails'
import Support from './support'
import ErrorPage from './error'

const App = props => (
    <div className="contentAndFooter">
        <div className="content">
            <NaviBar />
            <div className='main-content'>
                {props.children}
            </div>
        </div>
        <div className="footer">
            <div className="footer-content">
                <div className="footer-menu-container">
                    <div className="footer-menu">
                        copyright@bambora.com
                    </div>
                </div>
            </div>

        </div>
    </div>
)


export default (
  <Route path='/' component={App} >
    <IndexRoute component={Home} />
    <Route path='transactions' component={Transactions} >
      <Route path=':id' component={TransactionDetails} />
    </Route>
   
    <Route path='settlements' component={Settlements} >
      <Route path=':id' component={SettlementDetails} />
    </Route>
    <Route path='support' component={Support}/>
    <Route path="error" component={ErrorPage}/>
    <Route path="*" component={ErrorPage}/>
  </Route>
)