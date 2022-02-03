import { IonIcon, IonRouterLink } from "@ionic/react";
import { Link, Router } from "react-router-dom";

import { checkmarkCircleOutline, heart, shareSocial } from "ionicons/icons";

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
  title,
  date,
  source,
  mainImgSrc,
  initialText,
  url,
  idEle
}) => {
  function setState(e){
    var like = document.getElementById(e.idEle) as HTMLInputElement;
    if(like.classList.contains('text-red-500')){
      like.classList.remove('text-red-500')
      like.classList.add("text-white");
    }else if(like.classList.contains('text-white')){
      like.classList.remove('text-white')
      like.classList.add("text-red-500");
    }
  }
  return (
    <div className="article">
      <div className="flex flex-col rounded-md m-4 px-4 pt-8 pb-4 text-center">
        <div className="flex">
          <div className="text-2xl font-bold text-white mb-4 text-center mx-auto title-article">
            {title}
          </div>
        </div>
        <div className="text-sm text-sonicSilver ">{`${date} | ${source}`}</div>
        <div className="my-3 mx-auto">
          <img className="rounded-sm" src={mainImgSrc} />
        </div>
        <div className="text-xs text-white mb-4">{`${initialText} ...`}</div>
        <div className="flex justify-between">
          <div className="flex w-10 h-10">
            <div className="w-full text-white">
              <IonRouterLink href={url} className="text-white font-mono">
                <IonIcon icon={shareSocial} className="text-3xl"></IonIcon>
              </IonRouterLink>
            </div>
          </div>
          <div className="flex w-10 h-10">
            <div className="w-full text-red-500" id={idEle} onClick={() => setState({idEle})}>
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
      <div className="sticky h-px bg-blue-200 w-4/5 mx-auto"></div>
    </div>
  );
};

export default ArticleOverview;
