import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "We'll restart for you";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1E3A8A",
          color: "white",
          paddingLeft: "60px",
          paddingTop: "60px",
        }}
      >
        <div
          style={{
            fontSize: "80px",
          }}
        >
          :)
        </div>
        <div
          style={{
            fontSize: "24px",
            paddingTop: "20px",
          }}
        >
          Your device ran into a problem and needs to restart.
        </div>
        <div
          style={{
            fontSize: "24px",
            paddingTop: "20px",
          }}
        >
          We're just collecting some error info, and then we'll restart for you.
        </div>
        <div
          style={{
            display: "flex",
          }}
        ></div>
      </div>
    )
  );
}
