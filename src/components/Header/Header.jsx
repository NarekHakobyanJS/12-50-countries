import React, { useEffect } from 'react'
import './Header.css'
import { API } from '../../api/api'

const Header = ({dispatch}) => {

    let region = ["Antarctic", "Americas", "Europe", "Africa", "Asia",  "Oceania"]

    const changeRegion = (region) => {
        API.getRegion(dispatch, region)
    }
    return (
        <header>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <button>all</button>
                {
                    region.map((reg) => <button onClick={() => changeRegion(reg)}>{reg}</button>)
                }
            </div>
            <div>
                <input />
            </div>
        </header>
    )
}

export default Header