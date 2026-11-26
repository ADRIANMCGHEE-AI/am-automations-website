"use client";
import { useCallback, useSyncExternalStore } from "react";
import { enquiryTopics } from "@/config/site";
const eventName = "am:interest";
const subscribe = (callback: () => void) => {
  window.addEventListener("popstate", callback);
  window.addEventListener(eventName, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(eventName, callback);
  };
};
const snapshot = () =>
  new URLSearchParams(window.location.search).get("interest") || "general";
export function useEnquiryContext() {
  const raw = useSyncExternalStore(subscribe, snapshot, () => "general");
  const topic = enquiryTopics.find((t) => t.id === raw) || enquiryTopics[0];
  const choose = useCallback((interest: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("interest", interest);
    window.history.replaceState(null, "", url);
    window.dispatchEvent(new Event(eventName));
  }, []);
  return { topic, choose };
}
