import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const AssayCard = ({ item }) => {
  return (
    <Card sx={{ maxHeight: 445 }}>
      <CardHeader
        title={item?.Title}
        subheader={item?.CreateDate}
      />
      <CardMedia
        component="img"
        alt={item?.Title}
        height="200"
        image={
          item?.ImageURL || "https://via.placeholder.com/200.png?text=No+Image"
        }
      />
      <CardContent sx={{ height: 75 }}>
        <Typography variant="body2" color="text.secondary">
          {item?.Content}
        </Typography>
        </CardContent>
        <CardContent sx={{ height: 10 }}>
        <Typography variant="body1" color="text.primary">
        {item?.User}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AssayCard;
