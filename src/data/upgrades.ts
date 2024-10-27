import { ModifierType } from '../enums/modifierTypeEnum';

export const UPGRADES = [
  {
    id: 1,
    name: "Buy a VPN",
    initialCost: 100,
    description: "Purchase a VPN to hide from authorities.",
    costModifier: 1.5,
    timesPurchased: 1,
    modifierType: ModifierType.clicksPersSecond
  },
  {
    id: 2,
    name: "Set Up a Secure Chat",
    initialCost: 200,
    description: "Establish a secure communication channel for your followers.",
    costModifier: 1.6,
    timesPurchased: 1,
    modifierType: ModifierType.followersPerSecond
  },
  {
    id: 3,
    name: "Recruit a Hacker",
    initialCost: 500,
    description: "Bring a skilled hacker onboard to access confidential information.",
    costModifier: 1.7,
    timesPurchased: 1,
    modifierType: ModifierType.clicksPersSecond
  },
  {
    id: 4,
    name: "Launch a Misinformation Campaign",
    initialCost: 800,
    description: "Spread your conspiracy theories wider through social media.",
    costModifier: 1.8,
    timesPurchased: 1,
    modifierType: ModifierType.followersPerSecond
  },
  {
    id: 5,
    name: "Acquire a Secret HQ",
    initialCost: 1200,
    description: "Buy a headquarters for your followers to gather.",
    costModifier: 2.0,
    timesPurchased: 1,
    modifierType: ModifierType.followersPerSecond
  },
  {
    id: 6,
    name: "Encrypt Data Archives",
    initialCost: 1500,
    description: "Secure your data archives with advanced encryption.",
    costModifier: 2.2,
    timesPurchased: 1,
    modifierType: ModifierType.clicksPersSecond
  },
  {
    id: 7,
    name: "Develop a Mobile App",
    initialCost: 2000,
    description: "Create an app to keep your followers engaged on the go.",
    costModifier: 2.5,
    timesPurchased: 1,
    modifierType: ModifierType.followersPerSecond
  },
  {
    id: 8,
    name: "Upgrade Server Capacity",
    initialCost: 2500,
    description: "Enhance your servers to handle more follower data.",
    costModifier: 2.8,
    timesPurchased: 1,
    modifierType: ModifierType.clicksPersSecond
  },
  {
    id: 9,
    name: "Hire Private Security",
    initialCost: 3000,
    description: "Protect your operations with private security personnel.",
    costModifier: 3.0,
    timesPurchased: 1,
    modifierType: ModifierType.clicksPersSecond
  },
  {
    id: 10,
    name: "Influence a Public Figure",
    initialCost: 5000,
    description: "Gain the support of a public figure to spread your message.",
    costModifier: 3.5,
    timesPurchased: 1,
    modifierType: ModifierType.followersPerSecond
  }
];
