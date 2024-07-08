"use client"

import { useState } from 'react';

export default function WebpComponent() {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [quality, setQuality] = useState(0.7); // 초기 퀄리티 설정 (0.8 = 80%)

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    console.log("@@", imageFile)
    setOriginalImage(URL.createObjectURL(imageFile));

    const reader = new FileReader();
    console.log(imageFile)
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      const image = new Image();
      image.src = reader.result;
      console.log("이미지", image.src)
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // 원하는 크기로 캔버스 크기 설정 (여기서는 원본 크기)
        canvas.width = image.width;
        canvas.height = image.height;
        
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        
        // WebP 형식으로 변환 및 압축
        const compressedDataUrl = canvas.toDataURL('image/webp', quality);
        console.log(compressedDataUrl)
        setCompressedImage(compressedDataUrl);
      };
    };
  };

  const handleQualityChange = (event) => {
    setQuality(Number(event.target.value));
  };

  return (
    <div>
      <h1>Image Upload and Compression</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div style={{ margin: '20px 0' }}>
        <label>
          Quality: 
          <input
            type="number"
            min="0.1"
            max="1"
            step="0.1"
            value={quality}
            onChange={handleQualityChange}
          />
        </label>
      </div>
      <div style={{ margin: '20px 0' }}>
        {originalImage && (
          <div>
            <h2>Original Image</h2>
            <img src={originalImage} alt="Original" style={{ maxWidth: '100%' }} />
          </div>
        )}
        {compressedImage && (
          <div>
            <h2>Compressed Image (WebP)</h2>
            <img src={compressedImage} alt="Compressed" style={{ maxWidth: '100%' }} />
          </div>
        )}
      </div>
    </div>
  );
}
