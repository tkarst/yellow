import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Yellow — a tribute to Coldplay";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/brand/yellow-logo.jpg"),
  );
  const src = `data:image/jpeg;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070605",
          backgroundImage:
            "radial-gradient(circle at 50% 45%, #3a1810 0%, #070605 62%)",
        }}
      >
        <img
          src={src}
          alt=""
          width={520}
          height={520}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size },
  );
}
