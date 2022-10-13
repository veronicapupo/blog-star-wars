import React, { useState } from "react";
import {
  Grid,
  AppBar,
  Tab,
  Tabs,
  Typography,
  Divider,
} from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listapostagem/ListaPostagem";
import "./TabPostagem.css";
import { Box } from "@mui/material";

function TabPostagem() {
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className="header-container">
          <Tabs
            centered
            indicatorColor="secondary"
            value={false}
            onChange={handleChange}
          >
            <Tab label="all posts" value="1" />
            <Tab label="about Us" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography
            variant="h6"
            gutterBottom
            component="h2"
            align="center"
            className="tab-sobre"
          >
            About uS
          </Typography>
          <Box className="tab-sobre-items">
              <Typography variant="h5">
              oN this page, those who wish to conquer the galaxy using the dark side of the force are welcome!
                iNsertion of themes and posts related to all content that involves the universe of star wars too!
                iF you support the galactic empire and all the sith lords, leave your opinion!
            
                "The Dark Side of the Force is a pathway to many abilities some consider to be unnatural." (Palpatine)
              </Typography>
              <img
                src="https://i.gifer.com/1DvF.gif"
                alt=""
                width="750px"
                height="500px"
              />
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
