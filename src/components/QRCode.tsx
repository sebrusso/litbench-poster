'use client';

import { QRCodeSVG } from 'qrcode.react';

interface QRCodeProps {
  url: string;
  label: string;
  size?: number;
}

export default function QRCode({ url, label, size = 80 }: QRCodeProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-2 border border-gray-300">
        <QRCodeSVG
          value={url}
          size={size}
          level="M"
          marginSize={0}
        />
      </div>
      <p className="text-xs text-center mt-1 font-sans text-gray-600 max-w-[100px]">
        {label}
      </p>
    </div>
  );
}
