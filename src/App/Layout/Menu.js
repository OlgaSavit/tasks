import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import ContentCopy from '@mui/icons-material/ContentCopy';
import PersonIcon from '@mui/icons-material/Person';
import TaskIcon from '@mui/icons-material/Task';

export default function Menu({show}) {
    return (
        <Paper sx={{ width: 320, maxWidth: '100%',height:'100vh',borderRadius:0 }}>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <PersonIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                </MenuItem>
                <Divider/>
                <MenuItem>
                    <ListItemIcon>
                        <TaskIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>Tasks</ListItemText>
                </MenuItem>
                <Divider/>
            </MenuList>
        </Paper>
    );
}