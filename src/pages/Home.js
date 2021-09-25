import React from "react";
import "../Styles/Home.css";
import { useContext, useState } from "react";
import { ToastContainer } from 'react-toastify';
import { AppContext } from "../context/Context";
import { deleteHandler, useFetch } from "../auth/functions";
import AssayCard from "../components/AssayCard";
import { Container, Grid } from "@mui/material";

const Home = () => {
  const deger = useContext(AppContext);
  const [info, setInfo] = useState(deger);

  const upDateFormHandler = (item) => {
    setInfo({ ...item });
  };
  const { blogList, isLoading } = useFetch();

  return (
    <Container sx={{mb:10}}>
        <Grid container spacing={3}>
      {blogList?.map((item) => (
        <Grid item xs={12} sm={6} md={3}>
          <AssayCard key={item?.id} item={item} />
        </Grid>
      ))}
    </Grid>
    <ToastContainer/>
    </Container>
  );
};

export default Home;
