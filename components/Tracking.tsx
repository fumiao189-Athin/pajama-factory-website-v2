"use client";

import Link from "next/link";
import { type ReactNode, useEffect } from "react";
import { site } from "@/lib/site";

const API =
  "https://script.google.com/macros/s/AKfycbzrroImg0XJG5dXppUPmFTqLCQr3g21v5a-ISE2uBzPKdH8YT_4Ike7z0BCDxxB3me6/exec";

type TrackingData = Record<string, string>;

function getVisitorId() {
  if (typeof window === "undefined") return "";

  const savedVisitorId = localStorage.getItem("fumiao_visitor_id");
  if (savedVisitorId) return savedVisitorId;

  const newVisitorId =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  localStorage.setItem("fumiao_visitor_id", newVisitorId);
  return newVisitorId;
}

function getTrackingData() {
  const searchParams = new URLSearchParams(window.location.search);

  return {
    visitorId: getVisitorId(),
    page: window.location.pathname,
    device: navigator.userAgent,
    referrer: document.referrer || "direct",
    utmSource: searchParams.get("utm_source") || "",
    utmMedium: searchParams.get("utm_medium") || "",
    utmCampaign: searchParams.get("utm_campaign") || "",
    time: new Date().toISOString()
  };
}

export async function sendCrmEvent(event: string, extraData: TrackingData = {}) {
  if (typeof window === "undefined") return;

  try {
    await fetch(API, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      body: JSON.stringify({
        event,
        ...getTrackingData(),
        ...extraData
      })
    });
  } catch (error) {
    console.error("CRM tracking failed:", error);
  }
}

export function TrackingBeacon() {
  useEffect(() => {
    const visitKey = `fumiao_visit_${window.location.pathname}_${window.location.search}`;

    if (!sessionStorage.getItem(visitKey)) {
      sessionStorage.setItem(visitKey, "recorded");
      void sendCrmEvent("visit");
    }
  }, []);

  return null;
}

export function TrackedWhatsAppLink({
  children,
  className,
  label = "WhatsApp Inquiry"
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      className={className}
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => void sendCrmEvent("whatsapp_click", { source: label })}
    >
      {children}
    </a>
  );
}

export function TrackedQuoteLink({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      className={className}
      href="#inquiry-form"
      onClick={() => void sendCrmEvent("quotation_click")}
    >
      {children}
    </Link>
  );
}
