import React, { Component } from 'react'
import Home from './home' 


/*
unacceptedModules / The following modules couldn't be hot updated: (They would need a full reload!)
https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
You also get this warning in v1.x if you write your root component 
as stateless plain function instead of using React.Component. 
This problem is already solved completely in the upcoming v3.x.
 */
class App extends Component{
    render () {
        return (
            <div className="contentAndFooter">
                <div className="content">
                    <div className='content-header'>
                        <h3>Adslot media log goes here</h3>
                    </div>
                    <div className='main-content'>
                        <Home />
                    </div>
                </div>
                <div className="footer">
                   <div className="footer-content">
                       <div className="footer-menu-container">
                           <div className="footer-menu"
                                style={{borderBottom:'solid 1px'}}>
                                <img src='./style/img/footer.png' />
                            </div>
                             <div className="footer-menu">
                                 copyright @bo.chen
                            </div>
                       </div>
                   </div>
                  
                </div>
            </div>
        )
    }
}

export default App