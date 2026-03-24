import { Athlete, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Athletes", href: "#", active: true },
  { label: "Teams", href: "#" },
  { label: "Events", href: "#" },
  { label: "Training", href: "#" },
];

export const SPORTS = [
  "All Sports",
  "Atletismo",
  "Boxeo",
  "Ciclismo",
  "Natación",
  "Tenis",
];

export const DELEGATIONS = [
  "All Teams",
  "Team USA",
  "Team Spain",
  "Team GB",
  "Team Jamaica",
  "Team Brazil",
];

export const ATHLETES: Athlete[] = [
  {
    id: "1",
    name: "Elena Richter",
    sport: "Tenis",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWBDxi4SxDQnqXgzbYE0bZMTK1riN6ETqeKVBGMgOPjofCtTNhyNaxBYQ_FJBU7TIKlxIPbMXPuTUDnx0XJ8OYMTJjXpJhRpLd-U5MRizoQduLHu2hY9jK-rTbujcG3e8krxGrXaOSLpfIp5JeShMfu3F9h0ORCW6s5oOd5FssceAn0MZjQvcadm7wHlWxkEfo02F7sTvnhcvK801tNdVTP9oNWJ5VCWMWVb8dJOcMf4xqQ3LpqqpotytCJavbyQ3o6w4LVnRlHJfB",
    badges: ["Elite", "Pro"],
    statLabel: "World Rank",
    statValue: "#4",
    record: "NAT RECORD",
  },
  {
    id: "2",
    name: "Jaxson Vane",
    sport: "Boxeo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUqdYVkJXjjIqXoEFQqIfr19TL5WOLKh1_l5vbVm_JDWNsFkSv3wDT5N62Rps70h62gX2H7__qAnHJ2rfpef2SAAC56k8s4aqD7iVPnYixo6r-IfTO1nqp9AAClDEyaAxafH8MC9YkAwXnyMQMT09F3dwRr1YcJCWifLkTyg4UAFHBe9mnYKZ16NsQaxdQpAiRz7KQGjYoSo8aHpTfaAwcwBYn61yW_F908I2sXjcMScqudaxMHx1WmufcsKaqNZgWSYthkb8xVoBe",
    badges: ["Undefeated"],
    statLabel: "Record",
    statValue: "24-0",
    record: "GOLD",
  },
  {
    id: "3",
    name: "Sarah Waters",
    sport: "Natación",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5OABHTG0cX2boXKxp0WO1zUDE7jvnwdQM6pv9XRhZ-7ftUJrCbWkZ45YwCVj341XcUP-ZezYBXuJfXOQxm1PRpgpjOiioMzlT1oBNk70Z8qsNDSfRgO4r8mraVGjIYVA1389kvwblAzQpMhSePS1AZWHD0IxbVVKZYgNtiNSkjd4xTq1pXpbaruAQDvdvwUtYS1CgwxmFJGv1yuIO2TPiihEXF7zVmFznKVhyy4oCcTqnctHQhieXhIf6jBPLT0pn7U-0ZWIaVmZo",
    badges: ["3x Champ"],
    statLabel: "Golds",
    statValue: "3",
    record: "WORLD REC",
  },
  {
    id: "4",
    name: "Leo Spin",
    sport: "Ciclismo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJw4mapdahPvbg642o0GnPuE_nBTRkvLPZBD_jCue-x3lXTj8ZXRxnSmvbPFTbvGPsIE-2JUqM_QskZjj_2bnzA42MmP-K0GNp1S0PerpRtPkYWI_4hzV1jrVjaKn3nWvnX5jl8JOesOXpIxclZ-_6yEFaX_mgD8fDtDAA8UAU-iNOJkAdCLQDe0zZh9zIPoZLp6gtmLGsB3VHvhWr7nkg5dQkSzcPg45mPQKSE44AqGtfvTMbpGAF8kW0YiBI5VvLhNZYzK0kWH9F",
    badges: ["Aero"],
    statLabel: "Top Speed",
    statValue: "72km/h",
    record: "ELITE",
  },
];
