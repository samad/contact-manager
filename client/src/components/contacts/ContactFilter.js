import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactFilter() {
  const contactContext = useContext(ContactContext);
  const text = useRef("");
  const { filterContact, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (ev) => {
    if (text.current.value !== "") {
      filterContact(ev.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className="my-4">
      <input
        ref={text}
        type="text"
        className="form-control"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
}

export default ContactFilter;
