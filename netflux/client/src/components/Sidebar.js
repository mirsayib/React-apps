import React, { useState } from "react";
import '../App.css';
import { SidebarData } from "./SidebarData";
import logo from '../images/logo2.jpg'



const Sidebar = ({setSuburl, setCurrent, flag, setFlag, setIsPending}) => {
    const [row, setRow] = useState('Home')  
    const handleClickGenre = (event) => {
        setSuburl('genre/movie/list?')
        setCurrent('genres')
        setIsPending(true)  
        setFlag(!flag)      

    }

    const handleClickHome = (title) => {
        setCurrent('trending')
        setSuburl('trending/all/week?')
        setIsPending(true)
        setFlag(!flag)
    }
    const handleClickSearch = (title) => {
        setCurrent('search')
        setSuburl('search/multi?query=leo&page=1&include_adult=false&')
        setIsPending(true)
        setFlag(!flag)
    }
    const handleClickMov = (title) => {
        setCurrent('movies')
        setSuburl('trending/movie/week?')
        setIsPending(true)
        setFlag(!flag)
    }
    const handleClickTv = (title) => {
        setCurrent('tv')
        setSuburl('trending/tv/week?')
        setIsPending(true)
        setFlag(!flag)
    }
    const handleClickPeople = (title) => {
        setCurrent('people')
        setSuburl('trending/person/week?')
        setIsPending(true)
        setFlag(!flag)
    }

    const functionHash = {
        'Home' : handleClickHome,
        'Search': handleClickSearch,
        'Movies': handleClickMov,
        'TV Shows': handleClickTv,
        'People': handleClickPeople,
        'Genres': handleClickGenre
    }

    return ( <div className="Sidebar">
        <ul className="SidebarList">
            <li>
                <div className="sidebar-logo">
                    <img src={logo} alt="" />
                </div>
            </li>
            {SidebarData.map((val, key) => (
                <li key={key} 
                    className="row"
                    id={val.title === row ? 'active' : ''}
                    >
                        {" "}
                        <div id="icon">{val.icon}</div>
                        <div id="title" onClick={()=>{
                            functionHash[val.title](val.title)
                            setRow(val.title)
                            }}>
                            {val.title}
                        </div>
                </li>
            ))}
        </ul>
        
    </div> );
}
 
export default Sidebar;