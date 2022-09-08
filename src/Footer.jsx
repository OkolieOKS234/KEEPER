import React from "react";

let date = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright &#169; {date}</p>
    </footer>
  );
}

export default Footer;
