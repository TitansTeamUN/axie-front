import { IonContent, IonHeader, IonPage, IonSearchbar } from "@ionic/react";
import { document } from "ionicons/icons";
import { useEffect, useState } from "react";

import { Header } from "../components/Basic";
import { ArticleOverview } from "../components/news";

const News = () => {
  const articlesDemo = [
    {
      id: 1,
      title: "RON Is Live!",
      date: "01/27/2022",
      source: "Axie Infinity Substack",
      titleIcon: document,
      mainImgSrc:
        "https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b20c047-9efa-4cf3-9038-a35e82ff6fc0_1600x966.jpeg",
      initialText:
        "RON is now used to pay for transactions on Ronin! Users will receive free transactions for holding Axies and/or land in their Ronin wallets. A RON/ETH pool with RON rewards is now live!",
      url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faxie.substack.com%2Fp%2Fron&amp;src=sdkpreparse",
    },
    {
      id: 2,
      title: "Season 20 Balancing Buffer Period",
      date: "01/16/2022",
      source: "Axie Infinity Substack",
      titleIcon: document,
      mainImgSrc:
        "https://cdn.substack.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fe55cd25e-1e5a-47b3-8329-3ef1b457ea81_1600x820.png",
      initialText:
        "We’ve just launched a balancing patch! We’ve released this patch prior to the release of the season to ensure sufficient time for play-testing. This should catch any unintended mechanics and consequences of the patch. This means that until Season 20 is formally launched, we may launch hot-fixes.",
      url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faxie.substack.com%2Fp%2Fseason-20-balancing-buffer-period&amp;src=sdkpreparse",
    },
    {
      id: 3,
      title: "[Axie] January Development Update!",
      date: "01/15/2022",
      source: "Axie Infinity Substack",
      titleIcon: document,
      mainImgSrc:
        "https://cdn.substack.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd12846a3-887a-4704-aa7b-e69ef9b7304f_1600x888.png",
      initialText:
        "Happy New Year Lunacians! 2021 was a seminal year for Axie Infinity.  Over the last year, we truly came together as a community and a movement, which has provided us all incredible opportunities to realize our vision of an expansive gaming digital nation.",
      url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faxie.substack.com%2Fp%2Faxie-january-development-update&amp;src=sdkpreparse",
    },
  ];

  const [search, setSearch] = useState("");
  const [newsArray, setNewsArray] = useState([] as any);

  useEffect(() => {
    let aux = [] as any;
    articlesDemo.forEach((report) => {
      if (report.title.includes(search)) {
        aux.push(report);
        setNewsArray(aux);
      }
    });
  }, [search]);

  return (
    <IonPage>
      <Header menu="menu" title="News" />
      <IonHeader>
        <div className="w-full bg-darkPurpleSecondary border-t border-black">
          <IonSearchbar
            id="search"
            color="light"
            value={search}
            placeholder="Search news..."
            className="text-black"
            onIonChange={(e) => setSearch(e.detail.value!)}
          ></IonSearchbar>
        </div>
      </IonHeader>

      <IonContent fullscreen color="primary" id="content">
        {newsArray.map((article, index) => {
          return (
            <ArticleOverview
              date={article.date}
              idArt={article.id}
              initialText={article.initialText}
              mainImgSrc={article.mainImgSrc}
              source={article.source}
              title={article.title}
              titleIcon={article.titleIcon}
              url={article.url}
              key={index}
            />
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default News;
