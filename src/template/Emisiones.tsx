import * as React from "react";
import Title from "./Title";
import {
  Box,
  IconButton,
  Grid,
  Tooltip,
  Typography,
  Link,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Emisiones() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Title>Emisiones</Title>
        <Tooltip title="Total de emsiones (tCOe)" arrow placement="top">
          <InfoOutlinedIcon
            color="disabled"
            sx={{
              height: 16,
              width: 16,
              bottom: "2px",
              left: "4px",
              position: "relative",
            }}
          />
        </Tooltip>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={6} md={6}>
          <IconButton aria-label="play/pause">
            <ArrowDropDownIcon sx={{ height: 22, width: 22, color: "red" }} />
            {/* Question: is this number missing the '%' symbol at the end?*/}
            <Typography component="p" variant="body1">
              - 7,500
            </Typography>
          </IconButton>
        </Grid>
        <Grid item xs={6} md={6}>
          <IconButton aria-label="play/pause">
            <ArrowDropUpIcon sx={{ height: 22, width: 22, color: "green" }} />
            <Typography component="p" variant="body1">
              + 91,181
            </Typography>
          </IconButton>
        </Grid>
        <Grid item xs={6} md={6}>
          <IconButton aria-label="play/pause">
            <ArrowDropDownIcon sx={{ height: 22, width: 22, color: "red" }} />
            {/* Question: do all numbers have the '%' symbol at the end?*/}
            <Typography component="p" variant="body1">
              - 1.6%
            </Typography>
          </IconButton>
        </Grid>
        <Grid item xs={6} md={6}>
          <IconButton aria-label="play/pause">
            <ArrowDropUpIcon sx={{ height: 22, width: 22, color: "green" }} />
            <Typography component="p" variant="body1">
              + 24.2 %
            </Typography>
          </IconButton>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography
            color="text.secondary"
            variant="caption"
            display="block"
            gutterBottom
          >
            vs año anterior
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography
            color="text.secondary"
            variant="caption"
            display="block"
            gutterBottom
          >
            vs año base
          </Typography>
        </Grid>
      </Grid>
      <br></br>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Saber más
        </Link>
      </div>
    </React.Fragment>
  );
}
