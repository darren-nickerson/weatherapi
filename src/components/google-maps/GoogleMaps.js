import React from "react";

function GoogleMaps({ data }) {
  return (
    <div className="mt-10 border-2  shadow-2xl">
      {data && (
        <iframe
          title="weather"
          width="100%"
          height="400"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&q=${data.city.name}}`}
        ></iframe>
      )}
    </div>
  );
}

export default GoogleMaps;
