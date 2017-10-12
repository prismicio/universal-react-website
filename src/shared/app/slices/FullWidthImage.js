import React from 'react';

export const FullWidthImage = (props) => {
  return (
    <section className="full-width-image content-section">
      <img src={props.slice.primary.image.url} />
    </section>
  );
};

export default FullWidthImage;