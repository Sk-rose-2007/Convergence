import type { StaticImageData } from "next/image";
import onamImg from "@/assests/images/onam.jpeg";

export type ImagePlaceholder = {
  id: string;
  imageUrl: StaticImageData;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  { id: "event-paper-presentation", imageUrl: onamImg },
  { id: "event-debugging", imageUrl: onamImg },
  { id: "event-connexion", imageUrl: onamImg },

  { id: "coordinator-1", imageUrl: onamImg },
  { id: "coordinator-2", imageUrl: onamImg },
  { id: "coordinator-3", imageUrl: onamImg },
  { id: "coordinator-4", imageUrl: onamImg },
];
