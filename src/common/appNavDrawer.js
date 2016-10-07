import React, {Component, PropTypes} from 'react'
import { browserHistory} from 'react-router'

import {Drawer ,Divider} from 'material-ui'
import {List, ListItem, MakeSelectable} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import {cyan500} from 'material-ui/styles/colors'

const SelectableList = MakeSelectable(List)
const appNavDrawer = props => {
   
    const onNavigation = (event,value) => {

        browserHistory.push(value)
        props.onNavDrawerClosing()
    }
   const onRequestChange = newStatus => {
      if(!newStatus){
          props.onNavDrawerClosing()
      }

    }
    
    return (
        <Drawer docked={false}
            width={250}
            open={props.open}
            onRequestChange={onRequestChange}
            >
             <SelectableList value=""
                onChange={onNavigation}
                >
              <Subheader>Bambora Back Office</Subheader>
              <ListItem primaryText="Settlements" value="/settlements" />,
              <ListItem primaryText="Transactions" value="/transactions" />,
              <ListItem primaryText="Account" value="/account" />,
              <ListItem primaryText="Support" value="/support" />,
        </SelectableList>
        </Drawer>
    )
}

appNavDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onNavDrawerClosing: PropTypes.func.isRequired
}

export default appNavDrawer