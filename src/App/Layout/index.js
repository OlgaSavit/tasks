import Header from "./Header";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useEffect, useState} from "react";
import Menu from "./Menu";
const useStyles = makeStyles((theme) => ({
    flexWrapper:{
        display:'flex',

    },
    flexWrapperColumn:{
        display:'flex',
        flexDirection:'column',
        width:'100%'
    }
}));
const Layout=({children})=>{
    const classes = useStyles();
    const [showMenu,setShowMenu]=useState(false);
    const onToggleMenu=()=>{
        setShowMenu(!showMenu)
    }
    return(
        <div className={classes.flexWrapper}>
            <div className={classes.flexWrapperColumn}>
                <Header showBtn={true} onToggleMenu={()=>onToggleMenu()}/>
                <div className={classes.flexWrapper}>
                    {showMenu && <Menu/>}
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Layout;