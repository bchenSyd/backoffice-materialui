import React from 'react'
import { browserHistory} from 'react-router'

import {AppBar, IconButton, Tabs,
    Tab, Slider} from 'material-ui'
import withWidth, {SMALL,MEDIUM, LARGE} from 'material-ui/utils/withWidth'

const appBar = props => {
    const {width, onMenuClicked} = props

    const onTabActivated = tab => {
         const route = tab.props['data-route']
         browserHistory.push(route)
    }

    const tabStyle = {
        width: '300px'
    }
    if (width === SMALL) {
        tabStyle.display = 'none'
    }
    return (
        <AppBar title="Back Office"
            titleStyle={{ minWidth: '150px' }}
            onLeftIconButtonTouchTap={onMenuClicked}
            zDepth={0}
            iconStyleRight={{flex:'6'}}
            iconElementRight={
                <div id='navi_menu_wraper' style={{display:'flex'}}>
                    <Tabs style={tabStyle}>
                        <Tab label="Settlements"   data-route="/settlements"  onActive={onTabActivated} />
                        <Tab label="Transactions"  data-route="/transactions" onActive={onTabActivated} />
                    </Tabs>
                     <div  className='placeholder' style={{ flex: '2' }}/>
                    <IconButton   iconClassName="glyphicon glyphicon-user " iconStyle={{ color: 'white' }}/>
                </div>}
            showMenuIconButton />
    )

}

export default withWidth()(appBar)
