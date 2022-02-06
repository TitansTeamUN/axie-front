import { IonContent, IonIcon, IonPage, IonRouterLink } from "@ionic/react";
import { Component, useState } from "react";

import { Header } from "../../components/Basic";
import {
  checkmarkCircleOutline,
  document,
  logoFacebook,
  arrowBackCircleSharp,
} from "ionicons/icons";

export default class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props["match"]["params"]["id"]);
    const articlesDemo = {
      1: {
        id: 1,
        title: "RON Is Live!",
        date: "01/27/2022",
        source: "Axie Infinity Substack",
        mainImgSrc:
          "https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b20c047-9efa-4cf3-9038-a35e82ff6fc0_1600x966.jpeg",
        initialText:
          "RON is now used to pay for transactions on Ronin! Users will receive free transactions for holding Axies and/or land in their Ronin wallets. A RON/ETH pool with RON rewards is now live!",
        url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faxie.substack.com%2Fp%2Fron&amp;src=sdkpreparse",
        largeText:
          "Sky Mavis' mission is to create engaging, fun, and rewarding game experiences for everyone.  We believe this is best enabled on top of open, decentralized foundations that allow everyone to collectively contribute, work together, and prosper as a community.  Ronin is a core component of that foundation, built in response to considerable transactional bottlenecks experienced while building and scaling our Axie Infinity over the past four years. \nWhile our ambitions for Axie Infinity are massive, we believe we can only truly achieve our mission by working in solidarity with the next generation of NFT game developers to also unlock their creative visions.  We're excited to collaborate with the industry to create a broad based gaming ecosystem that shares a massive user base, community owned protocols, applications, and deep asset liquidity.  Therefore, in many ways, today’s release of the RON token and our Ronin strategy is a significant milestone for our industry. \n We recognize that game developers need a battle-tested NFT scaling solution to reach  broad, diverse audiences.  Ronin has a unique opportunity to support this nascent industry as: - Network effects created by Axie Infinity are strong and growing stronger by the week.  We believe this will continue to establish Ronin as the default NFT scaling solution for gaming. The Ronin wallet has been downloaded over 4 million times. - Ronin is operational and quickly becoming battle-tested. Today, Ronin handles more NFT volume than all other NFT scaling solutions combined. In 2021,  Ronin processed 15% of all NFT volume. - The Ronin bridge is currently the third largest bridge by total volume transferred, right behind Polygon and Avalanche. ",
      },
      2: {
        id: 2,
        title: "Season 20 Balancing Buffer Period",
        date: "01/16/2022",
        source: "Axie Infinity Substack",
        mainImgSrc:
          "https://cdn.substack.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fe55cd25e-1e5a-47b3-8329-3ef1b457ea81_1600x820.png",
        initialText:
          "We’ve just launched a balancing patch! We’ve released this patch prior to the release of the season to ensure sufficient time for play-testing. This should catch any unintended mechanics and consequences of the patch. This means that until Season 20 is formally launched, we may launch hot-fixes.",
        url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faxie.substack.com%2Fp%2Fseason-20-balancing-buffer-period&amp;src=sdkpreparse",
        largeText:
          "We’ve just launched a balancing patch! \nWe’ve released this patch prior to the release of the season to ensure sufficient time for play-testing. This should catch any unintended mechanics and consequences of the patch. This means that until Season 20 is formally launched, we may launch hot-fixes. \nOnce Season 20 is launched*, the card stats/mechanics will be static for the season. There may be extraordinary cases where a mechanic slips through but in those cases we will signal through our communication channels in advance and ask for community input. That said, we expect this new process to significantly decrease the probability of such a situation arising (this happened in Season 19 and we heard your feedback loud and clear). \nThis was the first round of balancing where we actively sought community input. We were delighted by the response and looked through over 40 unique sheets of community suggestions. Many of the sheets were based on objective data and showed a commitment to the best interest of the game. Others were less polished but were fun to look at nonetheless! We see this as one of the initial steps towards bringing the community closer to the act of co-creation around Axie. \nLet’s discuss a bit about the reasoning behind balancing changes. In short, the primary goal of card balancing is to ensure that each card is distinct and sufficiently powered so that all cards can be seen as having a balanced set of strengths and weaknesses. We believe that a well balanced game is more fun. As our game becomes more fun, the economy strengthens which we know is very important.",
      },
      3: {
        id: 3,
        title: "[Axie] January Development Update!",
        date: "01/15/2022",
        source: "Axie Infinity Substack",
        mainImgSrc:
          "https://cdn.substack.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd12846a3-887a-4704-aa7b-e69ef9b7304f_1600x888.png",
        initialText:
          "Happy New Year Lunacians! 2021 was a seminal year for Axie Infinity. Over the last year, we truly came together as a community and a movement, which has provided us all incredible opportunities to realize our vision of an expansive gaming digital nation.",
        url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faxie.substack.com%2Fp%2Faxie-january-development-update&amp;src=sdkpreparse",
        largeText:
          "Happy New Year Lunacians!  \n2021 was a seminal year for Axie Infinity. Over the last year, we truly came together as a community and a movement, which has provided us all incredible opportunities to realize our vision of an expansive gaming digital nation. Together, we will create an ecosystem that will allow each and every single community member to first and foremost have emotionally engaging gaming experiences, no matter their interest. We are working our hardest to rise to this challenge, to simultaneously grow our capacities in game development, community engagement, core infrastructure, and financial empowerment. Let’s get into it! \nWe hope you enjoyed our end of year Project K update, but needless to say we’ve been hard at work building in the meantime! Currently, the team is focused on building out the Project K trading feature that will enable players to trade various resources with one another. Just to give an idea of how much effort goes into a major feature, the trading system will likely take more than a month to build. Concepts and modeling are also in progress for various assets such as buildings and items. Here are some recently created 3D models for items.",
      },
    };

    var report = articlesDemo[this.props["match"]["params"]["id"]];
    return (
      <IonPage>
        <Header menu="menu" title="Article" />
        <IonContent fullscreen>
          <div className="flex flex-col bg-white  border border-black rounded-md m-4 px-4 pt-8 pb-4 article">
            <div className="flex justify-between">
              <div className="flex w-10 h-10 mr-3">
                <div className="w-full">
                  <IonIcon
                    icon={document}
                    className="text-darkPurpleSecondary text-3xl"
                  ></IonIcon>
                </div>
              </div>
              <div className="text-2xl text-darkPurpleSecondary underline mb-4">
                {report.title}
              </div>
              <div className=" text-blue-600">
                <IonRouterLink href={"/news"} className=" text-red-700">
                  <IonIcon
                    icon={arrowBackCircleSharp}
                    className="text-3xl"
                  ></IonIcon>
                </IonRouterLink>
              </div>
            </div>
            <div className="text-sm text-sonicSilver ">{`${report.date} | ${report.source}`}</div>
            <div className="my-3">
              <img className="rounded-sm" src={report.mainImgSrc} />
            </div>
            <div className="text-xs text-sonicSilver mb-4">
              {`${report.largeText}`}
            </div>
            <div className="flex justify-between">
              <div className="flex w-10 h-10">
                <div className="w-full text-blue-600">
                  <IonRouterLink
                    href={report.url}
                    className="w-full text-blue-600"
                  >
                    <IonIcon icon={logoFacebook} className="text-3xl"></IonIcon>
                  </IonRouterLink>
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
        </IonContent>
      </IonPage>
    );
  }
}
