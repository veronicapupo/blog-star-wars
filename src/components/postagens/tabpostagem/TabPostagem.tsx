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
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
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
            Sobre-nós
          </Typography>
          <Box className="tab-sobre-items">
              <Typography variant="h5">
                Nesta página Jedis e Mandalorianos são Bem vindos! inserção de
                temas e Postagens relacionadas a todo conteúdo que envolve a
                galáxia também! Se você apoia a Aliança Rebelde ou o Lado
                Sombrio Da Força deixe sua opinião! Muitas das verdades que
                temos dependem de nosso ponto de vista! (Yoda). Esteja
                consciente de seus pensamentos. Eles traem você. (Obi Wan).
                Sabe, não importa o quanto brigamos, eu sempre odiei ver você
                partir! (Princesa Léia). Agora a diversão vai começar! (Anakin
                Skywalker)
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
