import React from 'react'
import CountryCard from '../components/countryCard/countryCard';
import './pages.css'

const Home = ({countries}) => {

    
  return (
    <div>
        <div className='countries'>
        {
            countries.map((country) => {
                return <CountryCard key={country.name.common} country={country}/>
            })
        }
        </div>
    </div>
  )
}

export default Home