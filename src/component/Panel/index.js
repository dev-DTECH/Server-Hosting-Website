import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


export default function Panel() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="panel-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant={"contained"}
                endIcon={<KeyboardArrowDownIcon/>}
            >
                Panel
            </Button>
            <Menu
                // disableAutoFocusItem
                id="panel-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>Client Area</MenuItem>
                <MenuItem onClick={handleClose}>Game Panel</MenuItem>
            </Menu>
        </div>
    );
}
