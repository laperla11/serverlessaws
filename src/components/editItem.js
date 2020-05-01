import React, { useState } from 'react';

import { Icon } from 'semantic-ui-react';

import { API } from 'aws-amplify';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
} from 'reactstrap';

const EditItemModal = ({ className, getItems, editItem }) => {
  const { ItemName, ItemPrice, ItemDescription, ID } = editItem;
  const [modal, setModal] = useState(true);
  const initialItemState = { name: '', price: '', description: '' };
  const [item, setItem] = useState({
    name: ItemName,
    price: ItemPrice,
    description: ItemDescription,
    ID,
  });

  const setInput = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };
  const toggle = () => {
    setModal(!modal);
  };

  const deleteItem = async (id) => {
    try {
      const res = await API.del('peopleApi', `/items/object/${id}`, editItem);
      toggle();
      getItems();
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toggle();
    const editItem = {
      body: {
        ItemName: item.name,
        ItemPrice: item.price,
        ItemDescription: item.description,
        ID: item.ID,
      },
    };
    try {
      const res = await API.put('peopleApi', '/items', editItem);
      setItem(initialItemState);
      getItems();
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <FormGroup onSubmit={(e) => handleSubmit(e)}>
            <Label for='name'>Item Name</Label>
            <Input
              onChange={setInput}
              type='name'
              name='name'
              value={item.name}
              id='name'
              placeholder='Edit item name...'
            />
            <Label for='price'>Item Price</Label>
            <Input
              onChange={setInput}
              type='price'
              name='price'
              value={item.price}
              id='price'
              placeholder='£0.00'
            />
            <Label for='description'>Description of the Item</Label>
            <Input
              onChange={setInput}
              type='textarea'
              name='description'
              value={item.description}
              placeholder='Edit the description of the item...'
              rows={4}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleSubmit}>
            Sumbit
          </Button>
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
        <Button
          style={{ margin: '5px 10px' }}
          color='danger'
          onClick={() => deleteItem(item.ID)}
        >
          <Icon name='times circle outline' /> Delete Item
        </Button>
      </Modal>
    </div>
  );
};

export default EditItemModal;
