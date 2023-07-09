import React, { useEffect, useState} from 'react'
import './Covid.css';


const Covid = () => {
    const [status, setStatus] = useState([]);
  const getCovidData = async  () => {
    try {
      let url = 'https://api.covid19india.org/data.json';
      const res = await fetch(url);
      console.log(res);
      const data = await res.json();
      console.log(data.statewise[0]);
      setStatus(data.statewise[0]);
    } catch (err) {
        console.log(err);
    }
    
   
}

   useEffect ( () => {
    getCovidData();
   },[]);
  return (
    <div className='sec'>
    <section>
    <h1>🔴 LIVE</h1>
    <h2>COVID-19 LIVE TRACKER</h2>
    </section>
    <section>
      <ul>

        <li className='card-1 card'>
          <div className='card-main'>
            <div className='card-inner'>
              <p className='card-name'><span>OUR</span> COUNTRY </p>
              <p className='card-total card-small'>INDIA</p>
            </div>
          </div>
        </li>

        <li className='card-2 card'>
          <div className='card-main'>
            <div className='card-inner'>
              <p className='card-name'><span> TOTAL </span> RECOVERED </p>
              <p className='card-total card-small'> {status.recovered}</p>
            </div>
          </div>
        </li>

        <li className='card-3 card'>
          <div className='card-main'>
            <div className='card-inner'>
              <p className='card-name'><span> TOTAL </span> CONFIRMED </p>
              <p className='card-total card-small'> {status.confirmed} </p>
            </div>
          </div>
        </li>

        </ul>

        <ul>
        <li className='card-4 card'>
          <div className='card-main'>
            <div className='card-inner'>
              <p className='card-name'><span> TOTAL </span> DEATH </p>
              <p className='card-total card-small'> {status.deaths} </p>
            </div>
          </div>
        </li>

        <li className='card-5 card'>
          <div className='card-main'>
            <div className='card-inner'>
              <p className='card-name'><span> TOTAL </span> ACTIVE </p>
              <p className='card-total card-small'> {status.active} </p>
            </div>
          </div>
        </li>

        <li className='card-6 card'>
          <div className='card-main'>
            <div className='card-inner'>
              <p className='card-name'><span> LAST </span> UPDATE </p>
              <p className='card-total card-small'> {status.lastupdatedtime} </p>
            </div>
          </div>
        </li>

      </ul>
    </section>
   
    </div>
  )
}

export default Covid