import React from "react";
import { Card, Button } from "react-bootstrap";
import IconButton from "@mui/material/IconButton"
import Update from "./Update"
import { useSelector } from "react-redux";
import ModalSupression from "./ModalSupression"
const Evenement = (evenement) => {
  const user = useSelector((state) => state.userReducer.user);
  const isOwner = user.role === "modirateur" || user.role ==="admin superieur" || user.role ==="editeur"
  return (
    <div>
      <Card    style={{
        width: "80%",
        marginLeft: "2%",
        marginTop: "5%",
        marginBottom: "20%",
      }}>
        <Card.Body>
          <Card.Title>{evenement.evenement.nom}</Card.Title>
          <Card.Text>{evenement.evenement.description}</Card.Text>
          {isOwner && (
          <IconButton aria-label='share'>
          <div style={{ marginRight: "30%", marginLeft: "30%" }}>
            <Update eve={evenement.evenement._id} />
          </div>
          <ModalSupression eve={evenement.evenement._id} />
        </IconButton>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Evenement;
