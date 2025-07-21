export default function Panda3DWrapper() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden border border-white/10">
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-orange-900/20 rounded-xl">
        <iframe
          src="https://sketchfab.com/models/cab1991efe21432b91993643a57dd013/embed?autostart=1&ui_theme=dark"
          className="w-full h-full border-0 rounded-xl"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          referrerPolicy="no-referrer-when-downgrade"
          title="3D Panda Model Viewer"
        />
      </div>
    </div>
  );
}