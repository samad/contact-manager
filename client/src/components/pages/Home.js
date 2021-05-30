import React, { useContext, useEffect } from "react";
import Contact from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

function Home() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row">
      <div className="col-lg-6">
        <ContactForm />
      </div>
      <div className="col-lg-6">
        <ContactFilter />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
