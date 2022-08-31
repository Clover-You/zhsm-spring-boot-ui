/**
 * █████▒█      ██  ▄████▄   ██ ▄█▀     ██████╗ ██╗   ██╗ ██████╗
 * ▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒      ██╔══██╗██║   ██║██╔════╝
 * ▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░      ██████╔╝██║   ██║██║  ███╗
 * ░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄      ██╔══██╗██║   ██║██║   ██║
 * ░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄     ██████╔╝╚██████╔╝╚██████╔╝
 * ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒     ╚═════╝  ╚═════╝  ╚═════╝
 * ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░
 * ░ ░    ░░░ ░ ░ ░        ░ ░░ ░
 * ░     ░ ░      ░  ░
 * Copyright 2022 Clover You.
 * <p>
 * 占据整行的头部
 * </p>
 * @author Clover
 * @email cloveryou02@163.com
 * @create 2022-08-30 10:10
 */
import { AppBar, Avatar, Box, Button, Divider, Grid, IconButton, List, ListItem, ListItemIcon, Menu, MenuItem, Tab, Tabs, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { memo } from "react";
import MenuIcon from '@mui/icons-material/Menu';

import Style from './BlockHeader.module.less'
import { PersonAdd, Settings, Logout } from "@mui/icons-material";

export interface BlockHeaderProps { }
export const BlockHeader = memo<BlockHeaderProps>(() => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="inherit" enableColorOnDark>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1, maxWidth: { xs: 320, lg: '100%' }, overflow: 'hidden', alignSelf: 'flex-end' }}>
          <Tabs variant="scrollable" scrollButtons="auto"
            value={value}
            onChange={handleChange}>
            <Tab label="Item One" value={'one'} />
            <Tab label="Item Two" value={'two'} />
          </Tabs>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <IconButton
            onClick={handleClick}
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <div style={{ padding: 0, width: 300 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', }} style={{ padding: '10px 15px', paddingBottom: 18 }}>
              <Typography style={{ fontSize: 16 }} component="div" sx={{ flexGrow: 1 }}>
                老板
              </Typography>
              <Button style={{ padding: 0 }} variant="outlined">切换角色</Button>
            </Box>
            <Divider />
            <MenuItem style={{ marginTop: 8 }}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              安全退出
            </MenuItem>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  </Box>
})