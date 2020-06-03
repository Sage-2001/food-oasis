import React from "react";

const MapMarker = (color, isVerified, splitInactive, onClick = null) => {
  if (splitInactive && !color)
    return (
      <svg
        version="1.1"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="35px"
        height="48px"
        viewBox="0 0 35 48"
        enable-background="new 0 0 35 48"
        xmlSpace="preserve"
      >
        <path
          fill="#545454"
          d="M17.5,24.898c-4.766,0-8.627-3.863-8.627-8.628s3.863-8.628,8.627-8.628h0V0.093h0
  C7.97,0.093,0.245,7.819,0.245,17.35c0,9.529,17.255,30.557,17.255,30.557l0-0.001L17.5,24.898L17.5,24.898z"
        />
        <path
          fill="#545454"
          d="M17.5,0.093v7.549c4.766,0,8.627,3.863,8.627,8.628s-3.861,8.628-8.627,8.628v23.007
  c0.011-0.013,17.256-21.029,17.256-30.556C34.756,7.818,27.029,0.094,17.5,0.093z"
        />
      </svg>
    );

  if (!color) {
    const splitUnverified = (
      <svg
        version="1.1"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="35px"
        height="48px"
        viewBox="0 0 35 48"
        enable-background="new 0 0 35 48"
        xmlSpace="preserve"
        onClick={onClick}
      >
        <path
          fill="#CC3333"
          d="M17.5,24.898c-4.766,0-8.627-3.863-8.627-8.628s3.863-8.628,8.627-8.628h0V0.093h0
   C7.97,0.093,0.245,7.819,0.245,17.35c0,9.529,17.255,30.557,17.255,30.557l0-0.001L17.5,24.898L17.5,24.898z"
        />
        <path
          fill="#336699"
          d="M17.5,0.093v7.549c4.766,0,8.627,3.863,8.627,8.628s-3.861,8.628-8.627,8.628v23.007
   c0.011-0.013,17.256-21.029,17.256-30.556C34.756,7.818,27.029,0.094,17.5,0.093z"
        />
        <circle cx="17.6361" cy="16.875" r="9" fill="white" />
      </svg>
    );

    const splitVerified = (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="35px"
        height="48px"
        viewBox="0 0 35 48"
        enable-background="new 0 0 35 48"
        xmlSpace="preserve"
        onClick={onClick}
      >
        <path
          fill="#CC3333"
          d="M13.404,32.055c-2.56-4.199-5.182-7.761-7.417-11.866c-1.822-3.346,3.277-6.326,5.099-2.981
      c1.601,2.939,3.561,5.652,5.366,8.46l1.048-1.379V0.094h0C7.97,0.094,0.245,7.82,0.245,17.35c0,9.529,17.255,30.557,17.255,30.557
      l0-0.001V33.407C15.97,34.208,14.149,33.278,13.404,32.055z"
        />
        <path
          fill="#336699"
          d="M34.055,12.507L18.779,32.158c-0.373,0.607-0.813,1.005-1.279,1.249v14.499
      c0.011-0.013,17.255-21.03,17.255-30.556C34.756,15.667,34.504,14.045,34.055,12.507z"
        />
        <path
          fill="#336699"
          d="M30.968,6.577C27.805,2.629,22.951,0.094,17.5,0.094v24.195L30.968,6.577z"
        />
      </svg>
    );

    return isVerified ? splitVerified : splitUnverified;
  }

  const unverfied = (
    <svg x="0px" y="0px" width="35px" height="48px" viewBox="0 0 35 48">
      <path
        fill={color}
        d="M17.5,0.094c-9.53,0-17.255,7.726-17.255,17.256c0,9.529,17.255,30.557,17.255,30.557 S34.756,26.879,34.756,17.35C34.756,7.819,27.029,0.094,17.5,0.094z M17.5,24.898c-4.765,0-8.627-3.862-8.627-8.627 s3.863-8.628,8.627-8.628c4.765,0,8.627,3.863,8.627,8.628S22.265,24.898,17.5,24.898z"
      />
    </svg>
  );

  const verified = (
    <svg x="0px" y="0px" width="35px" height="48px" viewBox="0 0 35 48">
      <g>
        <path
          fill={color}
          d="M18.78,32.158c-1.599,2.601-4.404,1.492-5.376-0.103c-2.56-4.2-5.182-7.761-7.417-11.866
       c-1.822-3.346,3.277-6.326,5.099-2.981c1.601,2.939,3.561,5.652,5.366,8.46L30.968,6.577C27.805,2.629,22.951,0.094,17.5,0.094
       c-9.53,0-17.255,7.726-17.255,17.256c0,9.529,17.255,30.557,17.255,30.557S34.756,26.879,34.756,17.35
       c0-1.683-0.252-3.305-0.702-4.843L18.78,32.158z"
        />
      </g>
    </svg>
  );

  return isVerified ? verified : unverfied;
};

export default MapMarker;
