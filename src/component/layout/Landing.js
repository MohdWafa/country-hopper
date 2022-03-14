import React, { useState } from 'react';

export const Landing = (props) => {
  //dictionary used with keys being the destination, and values being the routes to the said destination.
  const routesList = {
    CAN: ['USA', 'CAN'],
    USA: ['USA'],
    MEX: ['USA', 'MEX'],
    BLZ: ['USA', 'MEX', 'BLZ'],
    GTM: ['USA', 'MEX', 'GTM'],
    SLV: ['USA', 'MEX', 'GTM', 'SLV'],
    HND: ['USA', 'MEX', 'GTM', 'HND'],
    NIC: ['USA', 'MEX', 'GTM', 'HND', 'NIC'],
    CRI: ['USA', 'MEX', 'GTM', 'HND', 'NIC', 'CRI'],
    PAN: ['USA', 'MEX', 'GTM', 'HND', 'NIC', 'CRI', 'PAN'],
  };
  //destructured elements for useState hook.
  const [country, setCountry] = useState('');
  const [routeList, setRouteList] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    //checking if input is in list
    if (!routesList[country.toString()]) {
      setRouteList('');
      //input is case-sensitive
      if (routesList[country.toUpperCase()]) {
        alert('Please note that the input is case sensitive.');
      } else {
        alert('Invalid code entered!');
      }
    } else {
      //acceptable input
      var routeString = '';
      //for loop to get the route string
      for (var i = 0; i < routesList[country].length - 1; i++) {
        routeString += routesList[country][i] + ' - ';
      }
      routeString += country; //finishing up the output string
      setRouteList(routeString);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='large'>Country Hopper</h1>
            <p className='lead'>
              {' '}
              Get the route from USA to the entered destination!
            </p>
            <label htmlFor='dest'>Enter Destination:</label>
            <input
              placeholder='Example: BLZ'
              type='text'
              id='dest'
              name='dest'
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input className='btn' type='submit' value='Submit' />
            <label className='res-label' htmlFor='res'>
              Route :
            </label>

            <input
              className='result'
              type='text'
              id='res'
              name='res'
              readOnly
              value={routeList}
            ></input>
          </div>
        </div>
      </section>
    </form>
  );
};
