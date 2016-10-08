import React from 'react'
import { browserHistory} from 'react-router'

import {AppBar, IconButton, Tabs,
    Tab, Slider , Menu, MenuItem} from 'material-ui'
import withWidth, {SMALL,MEDIUM, LARGE} from 'material-ui/utils/withWidth'

const appBar = props => {
    const {width, onMenuClicked} = props

    const onNavChange = (event, value)=>{
        browserHistory.push(value)
    }
    const style = {
        menuStyle: {
            width: '300px'
        },
        menuListStyle: {
            display: 'flex',
            paddingTop: '0',
            textTransform: 'uppercase'
        }
    }
    if (width === SMALL) {
        style.menuStyle.display = 'none'
    }

    return (
        <AppBar title="Back Office"
            titleStyle={{ minWidth: '150px' }}
            onLeftIconButtonTouchTap={onMenuClicked}
            zDepth={0}
            iconStyleRight={{flex:'6'}}
            iconElementRight={
                <div id='navi_menu_wraper' style={{display:'flex'}}>
                    <Menu style={style.menuStyle} listStyle={ style.menuListStyle} onChange={onNavChange}>
                        <MenuItem style={{color:'white'}}  primaryText='Settlements' value='/settlements' />
                        <MenuItem style={{color:'white'}}  primaryText='Transactions' value='/transactions' />
                    </Menu>


                     <div  className='placeholder' style={{ flex: '2' }}/>
                    <IconButton   iconClassName="glyphicon glyphicon-user " iconStyle={{ color: 'white' }}/>
                </div>}
            showMenuIconButton />
    )

}

export default withWidth()(appBar)
