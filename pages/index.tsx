
// Fixed script tag
import React, { useEffect } from "react";

const IndexPage = () => {
  useEffect(() => {
    setTimeout(function() {
      document.getElementById("body").style.display = "";        
    }, 200);

  }, []);

  return (
    <>
      <div id="body" style={{ display: "none" }}>
        {/* Your page content goes here */}
      </div>
    </>
  );
};

export default IndexPage;
