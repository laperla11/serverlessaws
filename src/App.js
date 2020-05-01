import React, { useState, useEffect } from 'react';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Segment, Menu, Icon } from 'semantic-ui-react';

import ItemDashboard from './components/itemDashboard';

import { API } from 'aws-amplify';

import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searcResults, setSearchResults] = useState([]);
  const fetchPeople = async () => {
    try {
      const peopleRes = await API.get('peopleApi', '/people');
      console.log('people', peopleRes);
      setPeople(peopleRes.people);

      const coinsRes = await API.get('peopleApi', '/coins');
      console.log('coins', coinsRes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const search = async () => {
    try {
      const myInit = {
        body: { search: searchTerm },
        headers: {}, // OPTIONAL
      };
      const searchRes = await API.post('peopleApi', '/jobs', myInit);
      setSearchResults(searchRes.jobs);
      console.log(searchRes, searcResults);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='App'>
      <AmplifySignOut />
      <Segment>
        <Menu>
          <Menu.Item name='home'>
            <Icon name='shop' />
          </Menu.Item>
          <Menu.Item name='Items' />
          <Menu.Item name='aboutUs' />
        </Menu>
      </Segment>
      <ItemDashboard />
      <input onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={search}>Search</button>
      {people.length ? (
        people.map((person, i) => <h2 key={i}>{person.name}</h2>)
      ) : (
        <h1>Loading...</h1>
      )}
      <hr />
      {searcResults.length ? (
        searcResults.map((job, i) => (
          <div key={i}>
            <h1>{job.title.replace(/(<([^>]+)>)/gi, '')}</h1>
            <p>{job.description.replace(/(<([^>]+)>)/gi, '')}</p>
          </div>
        ))
      ) : (
        <h1>Loading.....</h1>
      )}
    </div>
  );
}

export default withAuthenticator(App, { includesGreeting: true });
