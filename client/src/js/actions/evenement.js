import axios from "axios";
import {
    GET_EVENEMENTS_SUCCESS,
    GET_EVENEMENTS_LOAD,
    GET_EVENEMENTS_FAILED,
    EDIT_EVENEMENT,
    GET_EVENEMENT
  } from "../const/evenement";
  
export const getAllEvenement = () => async (dispatch) => {
  dispatch({ type: GET_EVENEMENTS_LOAD });
  try {
    let result = await axios.get("http://localhost:6500/evenement");
    dispatch({ type: GET_EVENEMENTS_SUCCESS, payload: result.data.response });
  } catch (errors) {
    dispatch({ type: GET_EVENEMENTS_FAILED, payload: errors });
  }
};

export const deleteEvenement = (id) => async (disaptch) => {
  axios
    .delete(`http://localhost:6500/evenement/${id}`)
    .then((res) => disaptch(getAllEvenement()))
    .then(() => alert("evenement supprimer avec succes"))
    .catch((err) => console.log(err));
};


export const postEvenement = (user) => async (dispatch) => {
  axios
    .post("http://localhost:6500/evenement", user)
    .then((res) => dispatch(getAllEvenement()))
    .then(() => alert("evenement ajouter avec succes"))
    .catch((err) => alert(err));
};

export const getEvenement = (id) => (dispatch) => {
  axios
    .get(`http://localhost:6500/evenement/${id}`)
    .then((res) =>
      dispatch({ type: GET_EVENEMENT, payload: res.data.response })
    )
    .catch((err) => console.log(err));
};

export const editEvenement = (id, employer) => (dispatch) => {
  axios
    .put(`http://localhost:6500/evenement/${id.id}`, employer)
    .then((res) => {
      alert("employer modifier avec succes");
      dispatch({
        type: EDIT_EVENEMENT,
        payload: { ...res.data.user},
      });
    })
    .catch((err) => console.log(err));
};