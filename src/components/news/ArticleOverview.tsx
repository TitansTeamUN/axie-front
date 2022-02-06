import { IonIcon, IonRouterLink } from "@ionic/react";
import { useState } from "react";

import {
  checkmarkCircleOutline,
  heart,
  heartOutline,
  logoFacebook,
} from "ionicons/icons";
import { Link } from "react-router-dom";

const ArticleOverview = ({
  idArt,
  titleIcon,
  title,
  date,
  source,
  mainImgSrc,
  initialText,
  url
}) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="flex flex-col bg-white  border border-black rounded-md m-4 px-4 pt-8 pb-4 article">
      <Link to={{
          pathname: '/article/'+idArt,
        }}>
      <div className="flex">
        <div className="flex w-10 h-10 mr-3">
          <div className="w-full">
            <IonIcon
              icon={titleIcon}
              className="text-darkPurpleSecondary text-3xl"
            ></IonIcon>
          </div>
        </div>
        <div className="text-2xl text-darkPurpleSecondary underline mb-4 title-article">
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
      </Link>
      <div className="flex justify-between">
        <div className="flex w-10 h-10">
          <div className="w-full text-blue-600">
            <IonRouterLink href={url} className="w-full text-blue-600">
              <IonIcon icon={logoFacebook} className="text-3xl"></IonIcon>
            </IonRouterLink>
          </div>
        </div>
        <div className="flex w-10 h-10">
          <div
            className="w-full text-red-500"
            onClick={() => setIsLiked(!isLiked)}
          >
            <IonIcon
              icon={isLiked ? heart : heartOutline}
              className="text-3xl"
            ></IonIcon>
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
