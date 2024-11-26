import React from "react";

function Home() {
  const iframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.2191821207084!2d72.97306599334473!3d22.53513731164335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4c701b5406dd%3A0x10fcf9f9e1a4d635!2sAnand%20Agricultural%20University!5e0!3m2!1sen!2sin!4v1721120003870!5m2!1sen!2sin";
  const iframeWidth = 1000;
  const iframeHeight = 500;

  return (
    <>
      <iframe
        src={iframeUrl}
        width={iframeWidth}
        height={iframeHeight}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </>
  );
}

export default Home;