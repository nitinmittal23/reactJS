import React from "react";

const Details = () => {
  return (
    <pre>
      <code>{JSON.stringify(this, null, 4)}</code>
    </pre>
  );
};

export default Details;
