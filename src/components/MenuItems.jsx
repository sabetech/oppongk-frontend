import React from "react";
import Typography from "@mui/material/Typography";
import MenuList from "../resource/MenuItems.json";
import { Link } from "react-router-dom";

export default function MenuItems({fontSize, imgWidth}) {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {
                MenuList.main_menu.map(item => 
                {
                    return (
                        <MenuItem key={item.title} path={item.path} icon={item.icon} title={item.title} fontSize={fontSize} imgWidth={imgWidth} />
                )
                }
            )
            }
        </div>
    )
}

function MenuItem({path, icon, title, fontSize, imgWidth}) {
    return(
        <Link to={path} key={path}>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                marginRight: 10,
                marginLeft: 10 
                }}>
            
                <img src={`app_icons/${icon}.png`} width={imgWidth} />
                <Typography sx={{color: 'grey', fontSize: fontSize}}>{title}</Typography>
                
            </div>
        </Link>
    );
}
