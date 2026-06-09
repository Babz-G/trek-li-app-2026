import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from "expo-haptics";
import { createContext, useContext, useEffect, useState } from "react";
import { Platform } from "react-native";

const STORAGE_KEY = "savedEventIds";

type SavedEventsContextType = {
  savedIds: Set<string>;
  toggleSave: (id: string) => Promise<void>;
  isSaved: (id: string) => boolean;
};

const SavedEventsContext = createContext<SavedEventsContextType | null>(null);

const triggerHaptic = (type: "save" | "remove") => {
  if (Platform.OS === "web") return;
  if (type === "save") {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  } else {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }
};

export function SavedEventsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((json) => {
      if (json) setSavedIds(new Set(JSON.parse(json)));
    });
  }, []);

  const toggleSave = async (id: string) => {
    const next = new Set(savedIds);
    if (next.has(id)) {
      next.delete(id);
      triggerHaptic("remove");
    } else {
      next.add(id);
      triggerHaptic("save");
    }
    setSavedIds(next);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
  };

  const isSaved = (id: string) => savedIds.has(id);

  return (
    <SavedEventsContext.Provider value={{ savedIds, toggleSave, isSaved }}>
      {children}
    </SavedEventsContext.Provider>
  );
}

export function useSavedEvents() {
  const ctx = useContext(SavedEventsContext);
  if (!ctx)
    throw new Error("useSavedEvents must be used within SavedEventsProvider");
  return ctx;
}
