/* import React from 'react'

function Header({ data }) {
    console.log("Header Component Re-rendered");
  return ( 
  <div>
    Header
    
    <br></br>
    <br></br>

    <code>{JSON.stringify(data)}</code>
    </div>
  
  
  )
}

export default React.memo(Header) */ 





import {useTheme} from "../context/ThemeContext";

function Header() {   
  const {theme,setTheme} = useTheme();

  return ( 
  <div>
    Active Theme: {theme}
    
    </div>
  
  
  )
}

export default Header;
