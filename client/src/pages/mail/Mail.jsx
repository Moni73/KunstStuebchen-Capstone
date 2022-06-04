import "./mail.css";
import { send } from "@emailjs/browser";
import { useState } from "react";

const Mail = () => {
  const [sender_name, set_sender_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [message, set_message] = useState("");
  const handleName = (e) => {
    set_sender_name(e.target.value);
  };
  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  };
  const handlemessage = (e) => {
    set_message(e.target.value);
  };
  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_l7omsxt",
      "template_3hlrxad",
      { sender_name, sender_email, message },
      "esv8DM6s-yYMWgl-6"
    )
      .then((response) => {
        console.log(
          "Message sent successfully",
          response.status,
          response.text
        );
      })
      .catch((err) => {
        console.log("Failed", err);
      });
    set_sender_name("");
    set_sender_email("");
    set_message("");
  };
  return (
    <div className="contacts">
      <div className="text-center">
        <h1>Kontaktiere mich</h1>
        <p>Bitte teile mir kurz mit, um was es geht ! Danke !</p>
      </div>
      <div className="container">
        <form onSubmit={sendMail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  name="sender_name"
                  value={sender_name}
                  onChange={handleName}
                  required
                  placeholder="Dein Name"
                />
                <div className="line"></div>
              </div>

              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  name="sender_email"
                  value={sender_email}
                  onChange={handleEmail}
                  required
                  placeholder="Deine EMail-Adresse"
                />
                <div className="line"></div>
              </div>
              <div className="text-center">
                <textarea
                  type="message"
                  className="form-control"
                  value={message}
                  onChange={handlemessage}
                  required
                  placeholder="Deine Nachricht"
                ></textarea>
                <div className="line"></div>
              </div>
              <button className="btn-main-offer contact-btn" type="submit">
                ABSCHICKEN !!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Mail;
