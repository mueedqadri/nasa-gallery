import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "../Image";
import Loading from "../Loading";
import { NASA_BASE_URL, NASA_API, API_KEY } from "../../constants";
import { Typography } from "@mui/material";

export default function List() {
  const [imageList, setImageList] = useState();

  const [favImages, setFavImages] = useState([]);

  const whatWasYesterday = () => {
    let today = new Date();
    return `${today.getFullYear()}-${parseInt(today.getMonth()) + 1}-${
      today.getDate() - 5
    }`;
  };

  useEffect(() => {
    fetch(
      `${NASA_BASE_URL}${NASA_API}photos?earth_date=${whatWasYesterday()}&page=1&api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImageList(data);
      });

    if (localStorage.getItem("favImages")) {
      setFavImages(JSON.parse(localStorage.getItem("favImages")));
    }
  }, []);

  const handleClick = (id) => {
    let currImages = favImages;
    if (currImages.includes(id)) {
      const index = currImages.indexOf(id);
      if (index > -1) {
        currImages.splice(index, 1);
      }
    } else {
      currImages.push(id);
    }
    setFavImages([...currImages]);
    localStorage.setItem("favImages", JSON.stringify(currImages));
    console.log(localStorage.getItem("favImages"));
  };

  if (imageList) {
    return (
      <Box m={4} pt={3}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {imageList.photos.map((image) => (
            <Image
              isFav={favImages.includes(image.id)}
              key={image.id}
              image={image}
              callback={handleClick}
            />
          ))}
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box p={75}>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
        >
          <Loading />
            <Typography>
              Loading
            </Typography>
        </Grid>
      </Box>
    );
  }
}
