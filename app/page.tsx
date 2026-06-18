"use client";

import { useEffect } from "react";

const API =
"https://script.google.com/macros/s/AKfycbzPPBqxiRq9CvylpbuUpAiml-8JkbRvPKQDO0pak8A7k_y4jgyCuenmDwEiP7KFH_dW/exec";

function send(event: string) {
  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      event,
      page: window.location.pathname,
      device: navigator.userAgent,
      referrer: document.referrer,
      time: Date.now()
    })
  });
}

export default function HomePage() {
  useEffect(() => {
    send("visit");
  }, []);

  function whatsapp() {
    send("whatsapp_click");

    window.open(
      "https://wa.me/8617520452787?text=Hi%20I%20want%20quotation",
      "_blank"
    );
  }

  return (
    <main>
      <section style={{ padding: 80, background: "#111", color: "#fff" }}>
        <h1>Custom Pajama Factory in China</h1>
        <p>15+ years OEM/ODM manufacturing</p>

        <button
          onClick={whatsapp}
          style={{
            marginTop: 20,
            padding: "12px 20px",
            background: "#25D366",
            color: "#fff",
            borderRadius: 8
          }}
        >
          WhatsApp Inquiry
        </button>
      </section>

      {/* floating button */}
      <div
        onClick={whatsapp}
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          background: "#25D366",
          color: "#fff",
          padding: 14,
          borderRadius: 999,
          cursor: "pointer"
        }}
      >
        WhatsApp
      </div>
    </main>
  );
}