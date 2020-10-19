import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';

export const MenuItemComp = (props) => {
    // console.log("key "+props.name.ISO2)
    return (
        
    <MenuItem value={props.name.ISO2} >{props.name.Country}</MenuItem>
    
    )
}
