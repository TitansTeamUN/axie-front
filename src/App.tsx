import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Page Components*/
import BreedingResults from "./pages/BreedingResults";
import MyAxies from "./pages/MyAxies";
import AxiesSearch from "./pages/AxiesSearch";
import Breeding from "./pages/Breeding";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import News from "./pages/News";
import CardExplorer from "./pages/CardExplorer";
import ScholarshipCalc from "./pages/ScholarshipCalculator";
import Article from "./pages/news/Article";

/* different styles */
import "./theme/miscelaneous.css";

/*Instance of Apollo Client (GraphQL) */
const gqlClient = new ApolloClient({
  uri: "https://graphql-gateway.axieinfinity.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <IonApp>
    <ApolloProvider client={gqlClient}>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/breedingResults/:idOne/:idTwo">
              <BreedingResults />
            </Route>
            <Route exact path="/myAxies">
              <MyAxies />
            </Route>
            <Route path="/axiesSearch">
              <AxiesSearch />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/scholar-calc">
              <ScholarshipCalc />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/article/:id" component={Article}/>
            <Route path="/breeding">
              <Breeding />
            </Route>
            <Route path="/card-explorer">
              <CardExplorer />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" hidden>
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={triangle} />
              <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={ellipse} />
              <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={square} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Menu" href="/Menu">
              <IonIcon icon={square} />
              <IonLabel>Menu</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </ApolloProvider>
  </IonApp>
);

export default App;
