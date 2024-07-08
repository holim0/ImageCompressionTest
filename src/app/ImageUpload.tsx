"use client"

import { useState } from 'react';
import imageCompression from 'browser-image-compression';

export default function ImageUpload() {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    setOriginalImage(URL.createObjectURL(imageFile));

    const options = {
      maxSizeMB: 10,
      useWebWorker: true,
      initialQuality: 0.7,
      fileType: 'image/webp'
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);
      const compressedImageUrl = URL.createObjectURL(compressedFile);
      setCompressedImage(compressedImageUrl);
    } catch (error) {
      console.error('Error compressing the image:', error);
    }
  };

  return (
    <div>
      <h1>Image Upload and Compression</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div style={{ margin: '20px 0' }}>
        {originalImage && (
          <div>
            <h2>Original Image</h2>
            <img src={originalImage} alt="Original" style={{ maxWidth: '100%' }} />
          </div>
        )}
        {compressedImage && (
          <div>
            <h2>Compressed Image</h2>
            <img src={compressedImage} alt="Compressed" style={{ maxWidth: '100%' }} />
          </div>
        )}
      </div>
    </div>
  );
}