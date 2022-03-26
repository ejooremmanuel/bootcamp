import { Telegram } from "@material-ui/icons";
import React from "react";
import "./components.styles.css";

const Invitation = () => {
  return (
    <div className="invitation__container">
      <div className="invitation__telegram invitation__container__contain">
        <h2>Join the workspace</h2>
        <p>
          Join our Discord and Telegram Channels get instant updates about our
          #activities, #sessions and other fun stuff.
        </p>
        <div className="invite__button">
          <a
            href="https://t.me/+UVLrHX2GmH4yMjM0"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <Telegram /> Telegram
          </a>
          <a
            href="https://discord.gg/Vp6gwAYH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </div>
      </div>
      <div className="invitation__mail invitation__container__contain">
        <h2>Subscribe to our newsletter</h2>
        <p>
          Get the latest updates about our events and hacks right in your inbox.
        </p>
        <div className="invite__button">
          <input type="text" placeholder="email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
