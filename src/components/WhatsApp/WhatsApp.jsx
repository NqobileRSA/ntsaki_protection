// WhatsApp.jsx
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./WhatsApp.css";

const WhatsApp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="0848252007"
      accountName="Ntsaki Protection"
      // avatar="https://example.com/avatar.png"
      welcomeMessage="Hello! How can I help you today?"
      darkMode={false}
      messageBackgroundColor="#25D366"
      showNumber={true}
      headerTitle="Chat with us"
      allowClickAway={true}
      allowEsc={true}
      width={1}
    />
  );
};

export default WhatsApp;
