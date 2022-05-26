require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Crypto4Bies";
const description = "5000 Unique Hand Drawn 4WDs";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "40 Background" },
      { name: "40 Livery" },
      { name: "40 Bullbars" },
      { name: "40 Outline" },
      { name: "40 Rearbar" },
      { name: "40 Roof" },
      { name: "40 Jack"},
      { name: "40 Wheels" },
    ],
  },{
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "60 Background" },
      { name: "60 Livery" },
      { name: "60 Outline" },
      { name: "60 Bullbar" },
      { name: "60 Rearbar" },
      { name: "60 Roof" },
      { name: "60 Decal" },
      { name: "60 Wheels"},
    ],
  },{
    growEditionSizeTo: 3000,
    layersOrder: [
      { name: "GU Backgrounds" },
      { name: "GU Snorkel"},
      { name: "GU Colour" },
      { name: "GU Body" },
      { name: "GU Decal" },
      { name: "GU RearBar" },
      { name: "GU Roof" },
      { name: "GU BullBar" },
      { name: "GU Wheels" },
    ],
  },{
    growEditionSizeTo: 4000,
    layersOrder: [
      { name: "Nav Background" },
      { name: "Nav Body" },
      { name: "Nav Snorkel" },
      { name: "Nav Roof Racks" },
      { name: "Nav BullBar" },
      { name: "Nav Decals"},
      { name: "Nav wind deflectors"},
      { name: "Nav Rear" },
      { name: "Nav Wheels"},
    ],
  },{
    growEditionSizeTo: 4900,
    layersOrder: [
      { name: "Zook Background" },
      { name: "Zook Colour" },
      { name: "Zook Outline" },
      { name: "Zook Bullbar" },
      { name: "Zook RearBar" },
      { name: "Zook Wind Deflectors"},
      { name: "Zook Decals"},
      { name: "Zook Roof" },
      { name: "Zook Wheels"},
    ],
  },{
    growEditionSizeTo: 4901,
layersOrder: [
  { name: "grubby Edition 1"}
]
  },{
    growEditionSizeTo: 4902,
layersOrder: [
  { name: "grubby Edition 2"}
]
  },{
    growEditionSizeTo: 4903,
layersOrder: [
  { name: "grubby Edition 3"}
]
  },{
    growEditionSizeTo: 4904,
layersOrder: [
  { name: "grubby Edition 4"}
]
  },{
    growEditionSizeTo: 4905,
layersOrder: [
  { name: "grubby Edition 5"}
]
  },{
    growEditionSizeTo: 4906,
layersOrder: [
  { name: "grubby Edition 6"}
]
  },{
    growEditionSizeTo: 4907,
layersOrder: [
  { name: "grubby Edition 7"}
]
  },{
    growEditionSizeTo: 4908,
layersOrder: [
  { name: "grubby Edition 8"}
]
  },{
    growEditionSizeTo: 4909,
layersOrder: [
  { name: "grubby Edition 9"}
]
  },{
    growEditionSizeTo: 4910,
layersOrder: [
  { name: "grubby Edition 10"}
]
  },{
    growEditionSizeTo: 4911,
layersOrder: [
  { name: "Kieran Edition 1"}
]
  },{
    growEditionSizeTo: 4912,
layersOrder: [
  { name: "Kieran Edition 2"}
]
  },{
    growEditionSizeTo: 4913,
layersOrder: [
  { name: "Kieran Edition 3"}
]
  },{
    growEditionSizeTo: 4914,
layersOrder: [
  { name: "Kieran Edition 4"}
]
  },{
    growEditionSizeTo: 4915,
layersOrder: [
  { name: "Kieran Edition 5"}
]
  },{
    growEditionSizeTo: 4916,
layersOrder: [
  { name: "Kieran Edition 6"}
]
  },{
    growEditionSizeTo: 4917,
layersOrder: [
  { name: "Kieran Edition 7"}
]
  },{
    growEditionSizeTo: 4918,
layersOrder: [
  { name: "Kieran Edition 8"}
]
  },{
    growEditionSizeTo: 4919,
layersOrder: [
  { name: "Kieran Edition 9"}
]
  },{
    growEditionSizeTo: 4920,
layersOrder: [
  { name: "Kieran Edition 10"}
]
  },{
    growEditionSizeTo: 4921,
layersOrder: [
  { name: "LR Edition 1"}
]
  },{
    growEditionSizeTo: 4922,
layersOrder: [
  { name: "LR Edition 2"}
]
  },{
    growEditionSizeTo: 4923,
layersOrder: [
  { name: "LR Edition 3"}
]
  },{
    growEditionSizeTo: 4924,
layersOrder: [
  { name: "LR Edition 4"}
]
  },{
    growEditionSizeTo: 4925,
layersOrder: [
  { name: "LR Edition 5"}
]
  },{
    growEditionSizeTo: 4926,
layersOrder: [
  { name: "LR Edition 6"}
]
  },{
    growEditionSizeTo: 4927,
layersOrder: [
  { name: "LR Edition 7"}
]
  },{
    growEditionSizeTo: 4928,
layersOrder: [
  { name: "LR Edition 8"}
]
  },{
    growEditionSizeTo: 4929,
layersOrder: [
  { name: "LR Edition 9"}
]
  },{
    growEditionSizeTo: 4930,
layersOrder: [
  { name: "LR Edition 10"}
]
  },{
    growEditionSizeTo: 4931,
layersOrder: [
  { name: "PT Edition 1"}
]
  },{
    growEditionSizeTo: 4932,
layersOrder: [
  { name: "PT Edition 2"}
]
  },{
    growEditionSizeTo: 4933,
layersOrder: [
  { name: "PT Edition 3"}
]
  },{
    growEditionSizeTo: 4934,
layersOrder: [
  { name: "PT Edition 4"}
]
  },{
    growEditionSizeTo: 4935,
layersOrder: [
  { name: "PT Edition 5"}
]
  },{
    growEditionSizeTo: 4936,
layersOrder: [
  { name: "PT Edition 6"}
]
  },{
    growEditionSizeTo: 4937,
layersOrder: [
  { name: "PT Edition 7"}
]
  },{
    growEditionSizeTo: 4938,
layersOrder: [
  { name: "PT Edition 8"}
]
  },{
    growEditionSizeTo: 4939,
layersOrder: [
  { name: "PT Edition 9"}
]
  },{
    growEditionSizeTo: 4940,
layersOrder: [
  { name: "PT Edition 10"}
]
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1080,
  height: 1080,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://www.crypto4bies.au", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Crypto4Bies';
const CONTRACT_SYMBOL = 'C4B';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xDE525C7BF5B0921B920b060Bfc074689856ef2cE';
const TREASURY_ADDRESS = '0xDE525C7BF5B0921B920b060Bfc074689856ef2cE';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-05-26T22:00:00+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xDE525C7BF5B0921B920b060Bfc074689856ef2cE"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Which Crypto4Bies Will You Get?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeiazfuactf3kxmtth34qb5l2ky7ltckcfcpes6anf7ij36quvhd54e"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 10,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = Infinity

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
