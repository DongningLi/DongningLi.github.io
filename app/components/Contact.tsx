import Spacer from "./Spacer";
import { contact } from "../../data/profiles";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      {Spacer(1)}
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
        <button className="btn btn--outline">
          Email Me
        </button>
      </a>
    </section>
  );
};

export default Contact;
