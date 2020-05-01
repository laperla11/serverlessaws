import React, { useState, useEffect } from 'react';
import { Container, Card } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { API } from 'aws-amplify';

import CreateItemModal from './createItem';
import EditItemModal from './editItem';

const ItemDashboard = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const toggle = () => setShowEditModal(!showEditModal);

  const getItems = async () => {
    const res = await API.get('peopleApi', '/items');
    console.log('dash', res);
    setItems(res.data);
  };

  const getItem = async (id) => {
    const res = await API.get('peopleApi', `/items/${id}`);
    setItem(res[0]);
    toggle();
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <CreateItemModal
        buttonLabel='Add an Item'
        className='info'
        getItems={getItems}
      />
      <Container style={{ padding: 10 }}>
        <h2>Item List : </h2>
        <Card.Group>
          {!items.length ? (
            <h3>Loading....</h3>
          ) : (
            items.map(({ ID, ItemName, ItemPrice, ItemDescription }) => (
              <Card key={ID} onClick={() => getItem(ID)}>
                <Card.Content>
                  <Card.Header>{ItemName}</Card.Header>
                  <Card.Meta>{ItemPrice}</Card.Meta>
                  <Card.Description>{ItemDescription}</Card.Description>
                  <Card.Meta>
                    <Icon name='edit' />
                  </Card.Meta>
                </Card.Content>
              </Card>
            ))
          )}
        </Card.Group>
        {showEditModal && (
          <EditItemModal className='info' getItems={getItems} editItem={item} />
        )}
      </Container>
    </div>
  );
};

export default ItemDashboard;
