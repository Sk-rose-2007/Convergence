import type { StaticImageData } from "next/image";
import paperprentationImg from "@/assests/images/paperpresentation.webp";
import debuggingImg from "@/assests/images/codedebug.jpg";
import connectionImg from "@/assests/images/Connectiongame.webp";
import kiruthikImg from "@/assests/images/kiruthik.jpeg";
import smrithiImg from "@/assests/images/smrithi.jpeg";
import uvaiseImg from "@/assests/images/uvaise.jpeg";
import kabiImg from "@/assests/images/kabi.jpeg";

export type ImagePlaceholder = {
  id: string;
  imageUrl: StaticImageData;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  { id: "event-paper-presentation", imageUrl: paperprentationImg },
  { id: "event-debugging", imageUrl: debuggingImg },
  { id: "event-connexion", imageUrl: connectionImg },

  { id: "coordinator-1", imageUrl: kiruthikImg },
  { id: "coordinator-2", imageUrl: smrithiImg },
  { id: "coordinator-3", imageUrl: uvaiseImg },
  { id: "coordinator-4", imageUrl: kabiImg },
];
