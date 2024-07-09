import Image from "next/image";
import { Suspense } from "react";
import ServerComponent from "./Component.server";
import ImageUpload from "./ImageUpload"
import WebpComponent from "./WebpComponent";
import CompressorComponent from "./CompressorComponent";

export default function Home() {
  return (
    <div>
      <h1>dasda</h1>
      <Suspense fallback={<div>loading...</div>}>
        <ServerComponent />
      </Suspense>
      <ImageUpload />
      <WebpComponent />
      <CompressorComponent />
    </div>
  );
}
