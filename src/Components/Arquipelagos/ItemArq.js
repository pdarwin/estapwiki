import React from "react";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import configData from "../../Config.json";
import {
  ArrowBackIos,
  ArrowForwardIos,
  CheckCircleOutline,
  RemoveCircleOutline,
} from "@mui/icons-material";
import { useModalContext } from "../../Reducers/ModalContext";
import { actionsM } from "../../Reducers/ModalReducer";
import { actionsD } from "../../Reducers/DataReducer";
import { useDataContext } from "../../Reducers/DataContext";
import UploadForm from "../UploadForm";
import ItemArqForm from "./ItemArqForm";
import { ErrorBoundary } from "react-error-boundary";

export default function ItemArq({ getTokenCSRF }) {
  const [loading, setLoading] = useState(false);
  const { modalDispatch } = useModalContext();
  const { dataState, dataDispatch } = useDataContext();

  const navigate = useNavigate();

  useEffect(() => {}, []);

  useEffect(() => {
    if (dataState.currentId !== 0) {
      if (
        dataState.data.Arquipelagos.filter(
          element => element.id === dataState.currentId
        ).length === 0
      ) {
        setLoading(true);
        getItem();
      } else {
        dataDispatch({
          type: dataState.forward ? actionsD.moveForward : actionsD.moveBack,
        });
      }
    } else {
      navigate("/");
    }
  }, [dataState.currentId]);

  function getItem() {
    console.log("get item", dataState.currentId);
    fetch("/arqapi/wp-json/wp/v2/imagem/" + dataState.currentId, {
      headers: {
        "Content-type": "application/json",
        "User-Agent": configData["User-Agent"],
      },
    })
      .then(response => {
        // Validar se o pedido foi feito com sucesso. Pedidos são feitos com sucesso normalmente quando o status é entre 200 e 299
        if (response.status !== 200) {
          console.log(response);
        }
        if (
          !response.ok ||
          !response.headers.get("Content-Type").startsWith("application/json")
        ) {
          throw new Error("The response is not JSON");
        }
        return response.json();
      })
      .then(parsedResponse => {
        if (parsedResponse.data) {
          if (parsedResponse.data.status === 404) {
            remove("X");
          } else if (parsedResponse.data.status === 401) {
            dataDispatch({
              type: actionsD.setCurrentId,
              payload: 0,
            });
            modalDispatch({
              type: actionsM.fireModal,
              payload: {
                msg: "Não existem imagens nas imediações, voltando à lista principal.",
                level: "info",
              },
            });
            navigate("/");
          } else {
            console.log("getitem", parsedResponse);
            modalDispatch({
              type: actionsM.fireModal,
              payload: {
                msg:
                  "Erro " +
                  parsedResponse.data.status +
                  ": Code: " +
                  parsedResponse.code +
                  ", Message: " +
                  parsedResponse.message,
                level: "error",
              },
            });
          }
        } else {
          buildItem(parsedResponse);
        }
      })
      .catch(error => {
        alert(error);
      });
  }

  function buildItem(rawItem) {
    fetch(rawItem.link.replace("https://www.arquipelagos.pt", "/arqapi"))
      .then(response => {
        // Validar se o pedido foi feito com sucesso. Pedidos são feitos com sucesso normalmente quando o status é entre 200 e 299
        if (response.status !== 200) {
          modalDispatch({
            type: actionsM.fireModal,
            payload: {
              msg: response.status + ": " + response.statusText + "(buildItem)",
              level: "error",
            },
          });
          return Promise.reject(response);
        }
        return response.text();
      })
      .then(parsedResponse => {
        try {
          const testImg = new RegExp(
            '(.*)(<img src="(.*?)" class="card-img mb-2")'
          );
          const testFilename = new RegExp(
            '(.*)(/(.*?)" class="card-img mb-2")'
          );

          const item = dataState.item;
          item.id = rawItem.id;
          item.title = rawItem.title.rendered;
          item.filename = testFilename
            .exec(parsedResponse)[3]
            .replace(".jpg", " - Image " + rawItem.id + ".jpg");
          item.link = rawItem.link;
          item.linkhtml = parsedResponse;
          item.imagelink = testImg.exec(parsedResponse)[3];
          item.content = rawItem.content.rendered;
          item.description = rawItem.content.rendered;
          dataDispatch({
            type: actionsD.updateItem,
            payload: item,
          });
        } catch (error) {
          alert(error);
        }
        setLoading(false);
      });
  }

  function remove(type) {
    let tmp = dataState.data;
    if (
      tmp.Arquipelagos.filter(element => element.id === dataState.currentId)
        .length === 0
    ) {
      tmp.Arquipelagos.push({
        id: dataState.currentId,
        status: type,
      });
      const filteredItems = dataState.items.filter(
        item => item.id !== dataState.currentId
      );
      dataDispatch({
        type: actionsD.updateData,
        payload: tmp,
      });
      dataDispatch({
        type: actionsD.updateItems,
        payload: filteredItems,
      });
      dataDispatch({
        type: actionsD.setFirstId,
        payload: filteredItems[0].id,
      });
      dataDispatch({
        type:
          !dataState.forward && dataState.currentId !== dataState.firstId
            ? actionsD.moveBack
            : actionsD.moveForward,
      });
    }
  }

  function wait(milliseconds, foo) {
    setTimeout(function () {
      foo(); // will be executed after the specified time
    }, milliseconds);
  }

  /*   function recurs(n) {
    if (n > 0) {
      let x = n + recurs(n - 1);
      return x;
    } else return n;
  } */

  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        console.log("erro", error);
        console.log("erro", errorInfo);
      }}
    >
      <Grid container>
        {dataState.item.id !== 0 && loading === false ? (
          <Grid container>
            <Grid item xs={2}>
              <Button
                variant="contained"
                onClick={() => {
                  remove("N");
                }}
                size="small"
                sx={{ m: 1 }}
                style={{ float: "left" }}
                startIcon={<RemoveCircleOutline />}
                color="error"
              >
                Não carregar
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                onClick={() => {
                  remove("Y");
                }}
                size="small"
                sx={{ m: 1 }}
                style={{ float: "left" }}
                startIcon={<CheckCircleOutline />}
                color="success"
              >
                Já existe no Commons
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                onClick={() => {
                  dataDispatch({
                    type: actionsD.moveBack,
                  });
                }}
                size="small"
                sx={{ m: 1 }}
                style={{ float: "left" }}
                startIcon={<ArrowBackIos />}
                disabled={dataState.currentId === dataState.firstId}
              >
                Anterior
              </Button>{" "}
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                onClick={() => {
                  dataDispatch({
                    type: actionsD.moveForward,
                  });
                }}
                size="small"
                sx={{ m: 1 }}
                style={{ float: "left" }}
                startIcon={<ArrowForwardIos />}
              >
                Próxima
              </Button>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                onClick={() => {
                  dataDispatch({
                    type: actionsD.setCurrentId,
                    payload: 0,
                  });
                  navigate(-1);
                }}
                size="small"
                sx={{ m: 1 }}
                style={{ float: "right" }}
              >
                Voltar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" style={{ float: "left" }}>
                Nome: {dataState.item.filename}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {dataState.item.id !== 0 ? (
                <Grid item xs={12} key={dataState.item.id}>
                  <Fragment>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: dataState.item.linkhtml,
                      }}
                    />
                  </Fragment>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
            <ItemArqForm />
            <UploadForm getTokenCSRF={getTokenCSRF} remove={remove} />
          </Grid>
        ) : (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CircularProgress
              style={{ float: "center" }}
              size={200}
              thickness={15}
            />
            <Typography variant="body2" color="text.secondary">
              Loading...
            </Typography>
          </div>
        )}
      </Grid>
    </ErrorBoundary>
  );
}
