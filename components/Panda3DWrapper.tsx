// components/Panda3DWrapper.tsx
// This component wraps the 3D model viewer, now using TinyGLB.

import React from 'react';

export default function Panda3DWrapper() {
  return (
    // The outer div maintains the overall size and rounded corners,
    // consistent with your existing styling for this component.
    <div className="w-full h-full rounded-xl overflow-hidden border border-white/10">
      {/* The inner div provides a background, but the iframe will cover it.
          Keeping it for consistency if there were other elements. */}
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-orange-900/20 rounded-xl">
        {/* The new TinyGLB iframe embed */}
        <iframe
          src="https://tinyglb.com/viewer/cab1991efe21432b91993643a57dd013" // Your new TinyGLB URL
          // Tailwind classes to make the iframe fill its parent div
          className="w-full h-full border-0 rounded-xl"
          // Standard iframe attributes for embedding
          allowFullScreen // Allows the user to make the iframe full screen
          // The 'allow' attribute can be removed if not needed for TinyGLB,
          // but keeping it doesn't hurt.
          allow="autoplay; fullscreen; xr-spatial-tracking"
          // referrerPolicy is good for security/privacy, keep it.
          referrerPolicy="no-referrer-when-downgrade"
          title="3D Panda Model Viewer" // Descriptive title for accessibility
        ></iframe>
      </div>
    </div>
  );
}