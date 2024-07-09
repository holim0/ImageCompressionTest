'use client'

import React, { useState } from 'react';
import Compressor from 'compressorjs';

const CompressorComponent = () => {
  const [compressedImage, setCompressedImage] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setOriginalImage(URL.createObjectURL(file));
      new Compressor(file, {
        quality: 0.7, // 압축 품질 설정 (0 ~ 1)
        mimeType: "image/webp",
        success: (compressedResult) => {
          setCompressedImage(URL.createObjectURL(compressedResult));
        },
        error(err) {
          console.error(err.message);
        },
      });
    }
  };

  return (
    <div>
      <h1>Image Compressor</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {originalImage && (
        <div>
          <h2>Original Image</h2>
          <img src={originalImage} alt="Original" style={{ maxWidth: '100%', margin: '10px 0' }} />
        </div>
      )}
      {compressedImage && (
        <div>
          <h2>Compressed Image (WebP)</h2>
          <img src={compressedImage} alt="Compressed" style={{ maxWidth: '100%', margin: '10px 0' }} />
          <a href={compressedImage} download="compressed-image.webp">
            Download Compressed Image
          </a>
        </div>
      )}
    </div>
  );
};

export default CompressorComponent;