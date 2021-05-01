import { useEffect, useState } from "react";
import AnnotationList from "../../components/annotation-list/annotation-list";
import Button from "../../components/ui/button/button";
import * as S from "../../styles/styled";
import { IAnnotation } from "../../types/Annotations";
import { getAllAnnotations } from "../../helpers/annotations.service";

function HomePage(props) {
  const [annotations, setAnnotations] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    const buscarAnotacoes = async () => {
      const response = await getAllAnnotations();
      if (response) {
        const annotations: IAnnotation[] = response.map((annotation) => ({
          ...annotation,
          id: annotation._id,
        }));
        setAnnotations(annotations);
        setLoadedData(true);
      }
    };
    if (!loadedData) buscarAnotacoes();
  }, [loadedData]);

  return (
    <S.Container>
      <S.Title>Anotações</S.Title>
      <AnnotationList items={annotations} />
      <S.Footer>
        <Button primary link={"/annotations/new-annotation"}>
          INSERIR NOVA ANOTAÇÂO
        </Button>
      </S.Footer>
    </S.Container>
  );
}

export default HomePage;
