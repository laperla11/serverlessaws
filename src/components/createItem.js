import React, { useState, useEffect } from 'react';
import uuidv1 from 'uuid/v1';

import { API } from 'aws-amplify';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
} from 'reactstrap';

const CreateItemModal = ({ buttonLabel, className, getItems }) => {
  const [modal, setModal] = useState(false);
  const initialItemState = { name: '', price: '', description: '' };
  const [item, setItem] = useState(initialItemState);

  const setInput = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };
  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit', item);
    const newItem = {
      body: {
        ItemName: item.name,
        ItemPrice: item.price,
        ItemDescription: item.description,
        ID: uuidv1(),
      },
    };
    try {
      const res = await API.post('peopleApi', '/items', newItem);
      console.log({ res });

      setItem(initialItemState);
      getItems();
    } catch (err) {
      console.log(err.response);
    }
  };
  // console.log('item before return', item);
  return (
    <div>
      <Button color='danger' onClick={toggle}>
        {buttonLabel}
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add an Item</ModalHeader>
        <ModalBody>
          <FormGroup onSubmit={(e) => handleSubmit(e)}>
            <Label for='name'>Item Name</Label>
            <Input
              onChange={setInput}
              type='name'
              name='name'
              value={item.name}
              id='name'
              placeholder='Enter item name...'
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
              placeholder='Enter the description of the item...'
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
      </Modal>
    </div>
  );
};

export default CreateItemModal;
