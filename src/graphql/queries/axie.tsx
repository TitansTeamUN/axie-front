import { DocumentNode } from "graphql";
import gql from "graphql-tag";

const GetAxieBriefList: DocumentNode = gql`
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
`;

const GetAxieDetail: DocumentNode = gql`
  query GetAxieDetail($axieId: ID!) {
    axie(axieId: $axieId) {
      ...AxieDetail
      __typename
    }
  }
  fragment AxieDetail on Axie {
    id
    image
    class
    chain
    name
    genes
    owner
    birthDate
    bodyShape
    class
    sireId
    sireClass
    matronId
    matronClass
    stage
    title
    breedCount
    level
    figure {
      atlas
      model
      image
      __typename
    }
    parts {
      ...AxiePart
      __typename
    }
    stats {
      ...AxieStats
      __typename
    }
    auction {
      ...AxieAuction
      __typename
    }
    ownerProfile {
      name
      __typename
    }
    battleInfo {
      ...AxieBattleInfo
      __typename
    }
    children {
      id
      name
      class
      image
      title
      stage
      __typename
    }
    __typename
  }
  fragment AxieBattleInfo on AxieBattleInfo {
    banned
    banUntil
    level
    __typename
  }
  fragment AxiePart on AxiePart {
    id
    name
    class
    type
    specialGenes
    stage
    abilities {
      ...AxieCardAbility
      __typename
    }
    __typename
  }
  fragment AxieCardAbility on AxieCardAbility {
    id
    name
    attack
    defense
    energy
    description
    backgroundUrl
    effectIconUrl
    __typename
  }
  fragment AxieStats on AxieStats {
    hp
    speed
    skill
    morale
    __typename
  }
  fragment AxieAuction on Auction {
    startingPrice
    endingPrice
    startingTimestamp
    endingTimestamp
    duration
    timeLeft
    currentPrice
    currentPriceUSD
    suggestedPrice
    seller
    listingIndex
    state
    __typename
  }
`;

const GetParentsBrief: DocumentNode = gql`
  query GetParentsBrief($matronId: ID!, $sireId: ID!) {
    matron: axie(axieId: $matronId) {
      ...AxieBrief
      __typename
    }
    sire: axie(axieId: $sireId) {
      ...AxieBrief
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
`;
export { GetAxieBriefList, GetAxieDetail, GetParentsBrief };
