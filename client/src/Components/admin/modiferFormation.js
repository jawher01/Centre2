import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { editFormation } from "../../js/actions/formation";
import Box from "@mui/material/Box";
import UpdateIcon from '@mui/icons-material/Update';
    
     
const ModiferFormation = ({ form }) => {
    
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formations = useSelector(
    (state) => state.formationReducer.formation
  );
  const currentFor = formations.find((p) => p._id == form);
  const [formation, setForma] = useState({
    nom: currentFor.nom ? currentFor.nom : "",
    description: currentFor.description ? currentFor.description : "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setForma({ ...formation, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editFormation({ id: form }, formation));
  };
  return (
    <div>
    <Button variant='outlined' color='primary' onClick={handleShow}>
    <UpdateIcon/>
    </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>mise a jour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box
            component='form'
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete='off'
          >
            <TextField
              required
              id='outlined-require'
              label='nom'
              defaultValue={formation.nom}
              name='nom'
              onChange={handleChange}
              InputProps={{
                readOnly: false,
              }}
            />
            <TextField
            required
            id='outlined-require'
            label='description'
            defaultValue={formation.description}
            name='description'
            onChange={handleChange}
            InputProps={{
              readOnly: false,
            }}
          />
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            fermer
          </Button>

          <Button variant='primary' onClick={submitHandler}>
            mise a jour
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModiferFormation;
