import { IAnnotation } from "../../types/Annotations";
import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../helpers/db-utils";

async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const annotation: IAnnotation = req.body;

    let result;

    try {
      result = await insertDocument(client, "annotations", annotation);
      annotation._id = result.insertedId;
      res
        .status(201)
        .json({ message: "Anotação inserida", annotation: annotation });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Falha na inserção da anotação! ${error}` });
    }

    res.status(201).json({ message: "Anotação inserido com sucesso!" });
  } else if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "annotations", {
        _id: -1,
      });
      res.status(200).json({ Annotations: documents });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Falha na busca das anotações cadastradas." });
    }
  }
  client.close();
}

export default handler;
