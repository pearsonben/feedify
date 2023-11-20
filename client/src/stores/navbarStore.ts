import { FiCompass, FiHome, FiStar, FiTrendingUp } from "react-icons/fi";
import { create } from "zustand";
import { Tab } from "../models/ui/tab";

const Tabs: Tab[] = [
  { name: "Home", icon: FiHome, path: "/" },
  { name: "Trending", icon: FiTrendingUp, path: "/trending" },
  { name: "Explore", icon: FiCompass, path: "/explore" },
  { name: "Favourites", icon: FiStar, path: "/favourites" },
];

interface NavbarState {
  tabs: Tab[];
  activeTab: Tab;
  setActiveTab: (newTab: Tab) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  tabs: Tabs,
  activeTab: Tabs[0],
  setActiveTab: (tab: Tab) => set(() => ({ activeTab: tab }))
}));
