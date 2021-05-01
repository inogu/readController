import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { TextField } from "@material-ui/core";
import * as S from "../../../styles/styled";
import Button from "../../../components/ui/button/button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { sendAnnotationData } from "../../../helpers/annotations.service";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "40ch",
      },
    },
  })
);

function NewAnnotationPage() {
  const [enteredLivro, setEnteredLivro] = useState("");
  const [enteredAnotacao, setEnteredAnotacao] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [requestError, setRequestError] = useState();

  const alert = useAlert();

  const router = useRouter();

  const styles = useStyles();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const insertAnnotation = async (event) => {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendAnnotationData({
        _id: undefined,
        nomeLivro: enteredLivro,
        anotacao: enteredAnotacao,
      });
      setRequestStatus("success");
      alert.show("Livro inserido com sucesso!");
      setEnteredLivro("");
      setEnteredAnotacao("");
      router.push("/Annotations");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Nova Anotação</title>
        <meta
          name="description"
          content="Escolha o livro e insira nova anotação!"
        />
      </Head>
      <S.Container>
        <S.FormContainer>
          <form className={styles.root} onSubmit={insertAnnotation}>
            <S.SubTitle>Nova Anotação</S.SubTitle>
            <br />
            <br />
            <S.Row>
              <TextField
                label="Livro"
                type="text"
                id="nome"
                value={enteredLivro}
                onChange={(event) => setEnteredLivro(event.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </S.Row>
            <S.Row>
              <TextField
                multiline={true}
                rows={3}
                label="Anotação"
                id="anotacao"
                value={enteredAnotacao}
                onChange={(event) => setEnteredAnotacao(event.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </S.Row>
            <br />
            <S.Footer>
              <Button>Inserir</Button>
            </S.Footer>
          </form>
        </S.FormContainer>
      </S.Container>
    </Fragment>
  );
}

export default NewAnnotationPage;
