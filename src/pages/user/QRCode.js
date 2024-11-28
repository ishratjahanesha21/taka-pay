import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineDownload } from 'react-icons/ai';
import { PiShareFatLight } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { message } from 'antd';

const QRCode = () => {
  const { qrcode } = useSelector(state => state.type);
  const [coloredQRCode, setColoredQRCode] = useState('');

  useEffect(() => {
    if (qrcode) {
      const img = new Image();
      img.src = qrcode;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Define the desired color
        const red = 226;
        const green = 19;
        const blue = 110;

        for (let i = 0; i < data.length; i += 4) {
          // Check if the pixel is black (assuming black threshold)
          if (data[i] < 128 && data[i + 1] < 128 && data[i + 2] < 128) {
            data[i] = red;      // Red
            data[i + 1] = green; // Green
            data[i + 2] = blue;  // Blue
          }
        }

        ctx.putImageData(imageData, 0, 0);
        setColoredQRCode(canvas.toDataURL());
      };
    }
  }, [qrcode]);

  const downloadQRCode = (e) => {
    e.preventDefault();
    saveAs(coloredQRCode || qrcode, 'qrcode.png');
  }

  const handleShare = (e) => {
    e.preventDefault();
    message.error("কাজ চলিতেছে");
  }

  return (
    <div className="h-screen">
      <div className="w-full md:w-3/4 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mx-auto">
        <div className="flex h-16" style={{ backgroundColor: '#000814' }}>
          <div className="w-1/4">
            <Link to="/profile">
              <FiArrowLeft className="text-white text-2xl mt-4 ml-2" />
            </Link>
          </div>
          <p className="text-white text-xl mt-4 ">My QR</p>
        </div>
        <div className="flex flex-1 items-center justify-center  ml-2 mr-2 mt-4">
          {coloredQRCode ? (
            <img src={coloredQRCode} alt="QR Code" className="w-3/4 mx-auto" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div>
          <p className="mt-8 text-center text-xs text-gray-500 font-medium">QR কোড শেয়ার করুণ</p>
          <div className="flex flex-1 items-center justify-center mt-4 gap-4">
            <button
              className="flex border p-2 text-gray-500 text-xs gap-2 border-gray-500 rounded-lg"
              onClick={downloadQRCode}
            >
              <AiOutlineDownload className="text-gray-500 text-xl" />
              ডাউনলোড করুণ
            </button>
            <button
              className="flex border p-2 text-xs gap-2 border-gray-500 rounded-lg text-gray-500"
              onClick={handleShare}
            >
              <PiShareFatLight className="text-gray-500 text-xl" /> শেয়ার করুণ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
