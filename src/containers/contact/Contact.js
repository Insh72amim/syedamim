import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";

export default function Contact() {
  return (
    <div className="animate-fade-in">
      <div className="main" id="contact">
        <div className="contact-card-box">
          <div className="section-eyebrow">CONNECT</div>
          <h2 className="contact-title">{contactInfo.title}</h2>
          <p className="contact-subtitle">{contactInfo.subtitle}</p>

          <div className="contact-grid-info">
            <a
              className="contact-info-item"
              href={"mailto:" + contactInfo.email_address}
            >
              <span className="contact-icon-svg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
              <div className="contact-meta">
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  {contactInfo.email_address}
                </span>
              </div>
            </a>

            {contactInfo.number && (
              <div className="contact-info-item">
                <span className="contact-icon-svg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <div className="contact-meta">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">{contactInfo.number}</span>
                </div>
              </div>
            )}

            <div className="contact-info-item">
              <span className="contact-icon-svg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <div className="contact-meta">
                <span className="contact-label">Location</span>
                <span className="contact-value">Hyderabad, India</span>
              </div>
            </div>
          </div>

          <div className="contact-social-footer">
            <span className="social-label">
              Find me across developer platforms:
            </span>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}
