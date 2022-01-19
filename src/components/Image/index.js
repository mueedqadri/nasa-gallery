import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Image(props) {
  const { camera, img_src, earth_date, id } = props.image;

  return (
    <Box m={2} pt={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={camera.full_name} subheader={earth_date} />
        <CardMedia
          component="img"
          height="194"
          image={img_src}
          alt="Paella dish"
        />
        <CardContent></CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => props.callback(id)}
            aria-label="add to favorites"
          >
            {props.isFav ? (
              <FavoriteIcon style={{ fill: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
