import React from "react";
import "../Styles/NevBlog.css";
import { ToastContainer } from "react-toastify";
import { useContext, useState } from "react";
import { Form, Input, Button, Select, Grid } from "semantic-ui-react";
import { AppContext } from "../context/Context";
import { AuthContext } from "../context/AuthContext";
import { addBlog, editHandler } from "../auth/functions";
import "firebase/auth";

const NewBlog = () => {
  const deger = useContext(AppContext);
  const user = useContext(AuthContext);
  const CreationDate = new Date().toDateString();
  const UserEmail = user.currentUser?.email;

  const [info, setInfo] = useState(deger);


  const AddingUserDate = () => {
    setInfo({ ...info, CreateDate: CreationDate, User: UserEmail });
  };

  const handleFormSubmit = () => {
    console.log(info);
    addBlog(info);
    setInfo(deger);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });

  };



  // console.log(CreationDate);
  // console.log(typeof CreationDate);
  // console.log(UserEmail);
  // console.log(typeof UserEmail);
  // console.log(deger);
  // console.log(info);
  // console.log(info.CreateDate);

  <h2 className="register-header">Register</h2>;

  return (
    <div className="Grid">
      <Grid textAlign="center" verticalAlign="middle">
        <Form
          onSubmit={() => {  
            handleFormSubmit();
          }}
        >
          <h2 className="contact-header">New Blog</h2>
          <Form.Field
            id="form-input-control-title"
            control={Input}
            label="Title"
            placeholder="Title"
            value={info.Title}
            name="Title"
            onChange={handleInputChange}
          />
          <Form.Field
            id="form-input-control-imageurl"
            control={Input}
            label="Image URL"
            placeholder="Image URL"
            value={info.ImageURL}
            name="ImageURL"
            onChange={handleInputChange}
          />
          <Form.Field
            id="form-input-control-content"
            control={Input}
            label="Content"
            placeholder="Content"
            value={info.Content}
            name="Content"
            onChange={handleInputChange}
          />

          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="SUBMIT"
            onClick = {() => { AddingUserDate()}} 
          />
        </Form>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default NewBlog;
