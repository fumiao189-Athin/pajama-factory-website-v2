"use client";

import {
  type CSSProperties,
  type FormEvent,
  useEffect,
  useState
} from "react";

const API =
  "https://script.google.com/macros/s/AKfycbzrroImg0XJG5dXppUPmFTqLCQr3g21v5a-ISE2uBzPKdH8YT_4Ike7z0BCDxxB3me6/exec";

type LeadForm = {
  name: string;
  company: string;
  country: string;
  email: string;
  whatsapp: string;
  product: string;
  quantity: string;
  message: string;
};

const initialForm: LeadForm = {
  name: "",
  company: "",
  country: "",
  email: "",
  whatsapp: "",
  product: "",
  quantity: "",
  message: ""
};

function getVisitorId() {
  if (typeof window === "undefined") {
    return "";
  }

  const savedVisitorId = localStorage.getItem("fumiao_visitor_id");

  if (savedVisitorId) {
    return savedVisitorId;
  }

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

async function send(
  event: string,
  extraData: Record<string, string> = {}
) {
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
}

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "13px 14px",
  border: "1px solid #d8d8d8",
  borderRadius: 8,
  fontSize: 15,
  background: "#ffffff",
  color: "#111111",
  outline: "none",
  boxSizing: "border-box"
};

const labelStyle: CSSProperties = {
  display: "block",
  marginBottom: 7,
  fontSize: 14,
  fontWeight: 600,
  color: "#222222"
};

export default function HomePage() {
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    const visitKey = `fumiao_visit_${window.location.pathname}`;

    if (!sessionStorage.getItem(visitKey)) {
      sessionStorage.setItem(visitKey, "recorded");

      send("visit").catch((error) => {
        console.error("Visit tracking failed:", error);
      });
    }
  }, []);

  function updateField(field: keyof LeadForm, value: string) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value
    }));
  }

  function whatsapp() {
    void send("whatsapp_click");

    window.open(
      "https://wa.me/8617520452787?text=Hi%20I%20want%20a%20quotation%20for%20custom%20pajamas",
      "_blank",
      "noopener,noreferrer"
    );
  }

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setStatus(null);

    try {
      await send("inquiry_submit", {
        name: form.name.trim(),
        company: form.company.trim(),
        country: form.country.trim(),
        email: form.email.trim(),
        whatsapp: form.whatsapp.trim(),
        product: form.product,
        quantity: form.quantity.trim(),
        message: form.message.trim()
      });

      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      console.error("Inquiry submission failed:", error);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f3",
        color: "#111111"
      }}
    >
      <section
        style={{
          padding: "90px 24px",
          background:
            "linear-gradient(135deg, #111111 0%, #252525 100%)",
          color: "#ffffff"
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto"
          }}
        >
          <p
            style={{
              margin: "0 0 14px",
              color: "#d6b77b",
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: "uppercase"
            }}
          >
            Fu Miao Pajama Factory
          </p>

          <h1
            style={{
              maxWidth: 800,
              margin: 0,
              fontSize: "clamp(38px, 6vw, 68px)",
              lineHeight: 1.08
            }}
          >
            Custom Pajama Manufacturer in China
          </h1>

          <p
            style={{
              maxWidth: 720,
              marginTop: 22,
              fontSize: 19,
              lineHeight: 1.7,
              color: "#dddddd"
            }}
          >
            15+ years of OEM and ODM sleepwear manufacturing for global
            brands, wholesalers, distributors and e-commerce sellers.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginTop: 30
            }}
          >
            <button
              type="button"
              onClick={whatsapp}
              style={{
                padding: "14px 24px",
                background: "#25d366",
                color: "#ffffff",
                border: 0,
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              WhatsApp Inquiry
            </button>

            <a
              href="#inquiry-form"
              style={{
                padding: "14px 24px",
                background: "#ffffff",
                color: "#111111",
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none"
              }}
            >
              Get a Quotation
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "70px 24px"
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 36,
            alignItems: "start"
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 10px",
                color: "#9a743a",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1
              }}
            >
              OEM / ODM Manufacturing
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 4vw, 46px)",
                lineHeight: 1.2
              }}
            >
              Tell Us About Your Pajama Project
            </h2>

            <p
              style={{
                marginTop: 20,
                color: "#555555",
                fontSize: 17,
                lineHeight: 1.8
              }}
            >
              Share your product, quantity, target market and customization
              requirements. Our team will review your inquiry and prepare a
              suitable manufacturing proposal.
            </p>

            <div
              style={{
                marginTop: 28,
                padding: 24,
                background: "#ffffff",
                borderRadius: 12,
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
              }}
            >
              <strong>We support:</strong>

              <p style={{ lineHeight: 1.8, color: "#555555" }}>
                Women&apos;s pajamas, men&apos;s pajamas, kids&apos;
                sleepwear, plus-size pajamas, family matching sets, robes,
                sleep dresses and private-label loungewear.
              </p>
            </div>
          </div>

          <form
            id="inquiry-form"
            onSubmit={submitInquiry}
            style={{
              padding: 30,
              background: "#ffffff",
              borderRadius: 14,
              boxShadow: "0 14px 45px rgba(0,0,0,0.08)"
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: 24,
                fontSize: 28
              }}
            >
              Request a Quotation
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(210px, 1fr))",
                gap: 18
              }}
            >
              <div>
                <label htmlFor="name" style={labelStyle}>
                  Your Name *
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(event) =>
                    updateField("name", event.target.value)
                  }
                  style={inputStyle}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="company" style={labelStyle}>
                  Company Name
                </label>

                <input
                  id="company"
                  type="text"
                  value={form.company}
                  onChange={(event) =>
                    updateField("company", event.target.value)
                  }
                  style={inputStyle}
                  placeholder="Company or brand"
                />
              </div>

              <div>
                <label htmlFor="country" style={labelStyle}>
                  Country *
                </label>

                <input
                  id="country"
                  type="text"
                  required
                  value={form.country}
                  onChange={(event) =>
                    updateField("country", event.target.value)
                  }
                  style={inputStyle}
                  placeholder="Country"
                />
              </div>

              <div>
                <label htmlFor="email" style={labelStyle}>
                  Email *
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                  style={inputStyle}
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" style={labelStyle}>
                  WhatsApp
                </label>

                <input
                  id="whatsapp"
                  type="text"
                  value={form.whatsapp}
                  onChange={(event) =>
                    updateField("whatsapp", event.target.value)
                  }
                  style={inputStyle}
                  placeholder="+1 234 567 890"
                />
              </div>

              <div>
                <label htmlFor="product" style={labelStyle}>
                  Product *
                </label>

                <select
                  id="product"
                  required
                  value={form.product}
                  onChange={(event) =>
                    updateField("product", event.target.value)
                  }
                  style={inputStyle}
                >
                  <option value="">Select a product</option>
                  <option value="Women Pajamas">Women Pajamas</option>
                  <option value="Men Pajamas">Men Pajamas</option>
                  <option value="Kids Pajamas">Kids Pajamas</option>
                  <option value="Plus Size Pajamas">
                    Plus Size Pajamas
                  </option>
                  <option value="Family Matching Pajamas">
                    Family Matching Pajamas
                  </option>
                  <option value="Sleep Dresses">Sleep Dresses</option>
                  <option value="Robes and Loungewear">
                    Robes and Loungewear
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <label htmlFor="quantity" style={labelStyle}>
                Estimated Quantity *
              </label>

              <input
                id="quantity"
                type="text"
                required
                value={form.quantity}
                onChange={(event) =>
                  updateField("quantity", event.target.value)
                }
                style={inputStyle}
                placeholder="Example: 500 sets"
              />
            </div>

            <div style={{ marginTop: 18 }}>
              <label htmlFor="message" style={labelStyle}>
                Project Requirements *
              </label>

              <textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={(event) =>
                  updateField("message", event.target.value)
                }
                style={{
                  ...inputStyle,
                  resize: "vertical"
                }}
                placeholder="Please tell us about fabric, design, sizes, colors, logo, packaging and delivery requirements."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                marginTop: 22,
                padding: "15px 22px",
                border: 0,
                borderRadius: 8,
                background: submitting ? "#777777" : "#111111",
                color: "#ffffff",
                fontSize: 16,
                fontWeight: 700,
                cursor: submitting ? "not-allowed" : "pointer"
              }}
            >
              {submitting ? "Submitting..." : "Send Inquiry"}
            </button>

            {status === "success" && (
              <p
                style={{
                  marginBottom: 0,
                  color: "#14833b",
                  fontWeight: 700
                }}
              >
                Thank you. Your inquiry has been submitted successfully.
              </p>
            )}

            {status === "error" && (
              <p
                style={{
                  marginBottom: 0,
                  color: "#c62828",
                  fontWeight: 700
                }}
              >
                Submission failed. Please contact us through WhatsApp.
              </p>
            )}
          </form>
        </div>
      </section>

      <button
        type="button"
        onClick={whatsapp}
        aria-label="Contact us on WhatsApp"
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 50,
          padding: "14px 19px",
          border: 0,
          borderRadius: 999,
          background: "#25d366",
          color: "#ffffff",
          fontSize: 15,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(0,0,0,0.22)"
        }}
      >
        WhatsApp
      </button>
    </main>
  );
}