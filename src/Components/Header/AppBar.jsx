import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './AppBar.scss';

function AppBar({toggleDrawer}) {

  function example(){
    toggleDrawer();
  }
  return (
    <header>

    <div className="header">
    
      <div className="drawer-btn" onClick={example}>
        <MenuIcon />
      </div>



      <div className="logo">
        <img
          src="/logo.png"
          style={{ width: "40px", marginRight: "8px" }}
          alt="logo"
        />
      </div>
      <div className="header-text">
        <h6>Keep</h6>
      </div>
      <div className="search-container">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="Appbar-icons">
        <RefreshIcon />
        <GridViewIcon />
        <SettingsOutlinedIcon />
      </div>
      <div className="Account-icons">
        <AppsIcon />
        <AccountCircleIcon />
      </div>
      </div>
    </header>
  );
}

export default AppBar;
