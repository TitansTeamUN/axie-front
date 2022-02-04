import { IonIcon } from "@ionic/react";

import {
  checkmarkCircleOutline,
  document,
  heart,
  shareSocial,
} from "ionicons/icons";

const articlesDemo = [
  {
    titleIcon: document, //use a const  from ionicons or a custom path
    title: "Breeding Fee Adjust",
    date: "12/07/2021",
    source: "Axie Infinity Substack",
    mainImgSrc:
      "https://cdn.substack.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F37f9cf47-fdd3-4c47-802e-a8c6d3c8f952_1840x640.png",
    initialText:
      "As we approach the end of the year holiday season, we wanted to start by reflecting a moment in awe of what we’ve accomplished together",
  },
];

const ArticleOverview = ({
  titleIcon,
  title,
  date,
  source,
  mainImgSrc,
  initialText,
}) => {
  return (
    <div className="flex flex-col bg-white  border border-black rounded-md m-4 px-4 pt-8 pb-4">
      <div className="flex">
        <div className="flex w-10 h-10 mr-3">
          <div className="w-full">
            <IonIcon
              icon={titleIcon}
              className="text-darkPurpleSecondary text-3xl"
            ></IonIcon>
          </div>
        </div>
        <div className="text-2xl text-darkPurpleSecondary underline mb-4">
          {title}
        </div>
      </div>
      <div className="text-sm text-sonicSilver ">{`${date} | ${source}`}</div>
      <div className="my-3">
        <img className="rounded-sm" src={mainImgSrc} />
      </div>
      <div className="text-xs text-sonicSilver mb-4">
        {`${initialText} ...`}
      </div>
      <div className="flex justify-between">
        <div className="flex w-10 h-10">
          <div className="w-full text-darkPurpleMain">
            <IonIcon icon={shareSocial} className="text-3xl"></IonIcon>
          </div>
        </div>
        <div className="flex w-10 h-10">
          <div className="w-full text-red-500">
            <IonIcon icon={heart} className="text-3xl"></IonIcon>
          </div>
        </div>
        <div className="flex w-10 h-10">
          <div className="w-full text-greenSheen">
            <IonIcon
              icon={checkmarkCircleOutline}
              className="text-3xl"
            ></IonIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleOverview;