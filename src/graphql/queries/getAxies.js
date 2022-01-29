import axios from "axios";

const getAxies = (setMyAxies) => {
  axios
    .post("https://graphql-gateway.axieinfinity.com/graphql", {
      query: `
      query GetAxieBriefList(
        $auctionType: AuctionType
        $criteria: AxieSearchCriteria
        $from: Int
        $sort: SortBy
        $size: Int
        $owner: String
        $filterStuckAuctions: Boolean
      ) {
        axies(
          auctionType: $auctionType
          criteria: $criteria
          from: $from
          sort: $sort
          size: $size
          owner: $owner
          filterStuckAuctions: $filterStuckAuctions
        ) {
          total
          results {
            ...AxieBrief
            __typename
          }
          __typename
        }
      }
      fragment AxieBrief on Axie {
        id
        name
        stage
        class
        breedCount
        image
        title
        battleInfo {
          banned
          __typename
        }
        auction {
          currentPrice
          currentPriceUSD
          __typename
        }
        parts {
          id
          name
          class
          type
          specialGenes
          __typename
        }
        __typename
      }
      `,
      variables: {
        from: 1,
        size: 24,
        sort: "PriceAsc",
        auctionType: "Sale",
        owner: null,
        criteria: {
          region: null,
          parts: null,
          bodyShapes: null,
          classes: null,
          stages: null,
          numMystic: null,
          pureness: null,
          title: null,
          breedable: null,
          breedCount: null,
          hp: [],
          skill: [],
          speed: [],
          morale: [],
          purity: [],
          numJapan: null,
          numXmas: null,
        },
        filterStuckAuctions: false,
      },
    })
    .then((res) => {
      console.log(
        "--------------------- Lista de Personajes --------------------------"
      );
      console.log(res.data.data.axies.results);
      setMyAxies(res.data.data.axies.results);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getAxies };
