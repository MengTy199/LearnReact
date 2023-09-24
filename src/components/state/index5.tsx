import React, { useState } from "react";

const Send: React.FC = () => {
  const [message, setMessage] = useState(String);
  const [isent, setIsSent] = useState(Boolean);
  if (isent) {
    return <h1>Thank you!</h1>;
  }else{
    return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`sending: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>{" "}
        <br />
        <button type="submit">Send</button>
      </form>
    </>
  );
  }
  
};

export default Send;
