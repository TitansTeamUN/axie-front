import { IonContent, IonHeader, IonPage, IonSearchbar } from "@ionic/react";
import { document } from "ionicons/icons";

import { Header } from "../components/Basic";
import { ArticleOverview } from "../components/news";

const News = () => {
  const demoMenuOptions = [
    {
      label: "Option 1",
      icon: "",
      slot: "",
      onItemClick: () => {
        console.log("clicked 1");
      },
      rippleEffect: true,
    },
    {
      label: "Option 2",
      icon: "",
      slot: "",
      onItemClick: () => {
        console.log("clicked 2");
      },
      rippleEffect: true,
    },
  ];

  const articlesDemo = [
    {
      titleIcon: document, //use a const from ionicons
      title: "Breeding Fee Adjust",
      date: "12/07/2021",
      source: "Axie Infinity Substack",
      mainImgSrc:
        "https://cdn.substack.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F37f9cf47-fdd3-4c47-802e-a8c6d3c8f952_1840x640.png",
      initialText:
        "As we approach the end of the year holiday season, we wanted to start by reflecting a moment in awe of what we’ve accomplished together",
    },
    {
      titleIcon: document, //use a const from ionicons
      title: "Developer Insights: Long-term Thinking with Axie Infinity",
      date: "12/08/2021",
      source: "Axie Infinity Substack",
      mainImgSrc:
        "https://cdn.substack.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fc0ef289e-6cdf-4ffe-a107-990a5dc985b0_1600x557.png",
      initialText:
        "At Sky Mavis, we are aware that there are a variety of different stakeholders within the Axie Infinity community with different levels of financial involvement, motivations, and goals. We are always actively monitoring feedback, and do our best to make decisions from a place of empathy to everyone in the community. ",
    },
  ];

  return (
    <IonPage>
      <Header menu="menu" title="Breeding" />
      <IonHeader>
        <div className="w-full bg-darkPurpleSecondary border-t border-black">
          <IonSearchbar
            color="light"
            value=""
            placeholder="Search news..."
            className="text-black"
            onIonChange={(e) => console.log(e.detail.value)}
          ></IonSearchbar>
        </div>
      </IonHeader>

      <IonContent fullscreen color="primary">
        {articlesDemo.map((article, index) => {
          return (
            <ArticleOverview
              date={article.date}
              initialText={article.initialText}
              mainImgSrc={article.mainImgSrc}
              source={article.source}
              title={article.title}
              titleIcon={article.titleIcon}
              key={index}
            />
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default News;
