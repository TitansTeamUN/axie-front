import { IonContent, IonPage, IonSearchbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { Header } from "../components/Basic";
import { Card } from "../components/cardExplorer";
import { axieCards } from "../utils";

const cards = axieCards.cards;

const CardExplorer = () => {
  return (
    <div>
      <IonPage>
        <Header menu="menuAxiesSearch" title="Card Explorer" />
        <IonContent fullscreen color="primary">
          <div className="grid grid-cols-2">
            {cards.map((card, index) => {
              if (index < 8) //only show 6 cards
                return (
                  <Card
                    name={card.name}
                    attack={card.attack}
                    defense={card.defense}
                    description={card.description}
                    energy={card.energy}
                    imgUrl={card.imgUrl}
                    key={index}
                  />
                );
            })}
          </div>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default CardExplorer;
