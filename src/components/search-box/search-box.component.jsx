import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ onChange, placeholder }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={onChange}
  />
);
