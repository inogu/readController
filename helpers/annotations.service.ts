import axios from "axios";
import { IAnnotation } from "../types/Annotations";

const urlAnnotations = axios.create({
  baseURL: `/api/annotations`,
});

export const sendAnnotationData = async (annotationDetails: IAnnotation) => {
  const response = await urlAnnotations.post("", annotationDetails);

  const data = await response.data;

  if (!response.status) {
    throw new Error(data.message || "Something went wrong!");
  }
};

export const getAllAnnotations = async () => {
  const response = await urlAnnotations.get("");
  return response.data.Annotations;
};
