import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Real Estate",
    newTab: false,
    path: "/shop-with-sidebar?category=real-estate",
  },
  {
    id: 3,
    title: "Automobiles",
    newTab: false,
    path: "/shop-with-sidebar?category=automobiles",
  },
  {
    id: 4,
    title: "Short Stay",
    newTab: false,
    path: "/shop-with-sidebar?category=short-stay-apartments",
  },
  {
    id: 5,
    title: "Products",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 51,
        title: "Perfumes",
        newTab: false,
        path: "/shop-with-sidebar?category=perfumes",
      },
      {
        id: 52,
        title: "Human Hair",
        newTab: false,
        path: "/shop-with-sidebar?category=human-hair",
      },
      {
        id: 53,
        title: "Drinks & Wines",
        newTab: false,
        path: "/shop-with-sidebar?category=drinks-wines",
      },
      {
        id: 54,
        title: "Bags",
        newTab: false,
        path: "/shop-with-sidebar?category=bags",
      },
    ],
  },
  {
    id: 6,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
];