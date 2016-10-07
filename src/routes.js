import React, {Component} from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import Home from './home'
import Settlements from './settlements'
import SettlementDetails from './settlements/settlementDetails'
import Transactions from './transactions'
import TransactionDetails from './transactions/transactionDetails'

import App from './app'
import Support from './support'
import ErrorPage from './error'


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