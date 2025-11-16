import React, { useEffect, useRef, useState } from "react";
import Screen1 from "./Screen1";
import Final from "./Final";

function App() {
  const audioRef = useRef(null);
  const [page, setPage] = useState(0);
  const [allowedAutoPlay, setAllowedAutoPlay] = useState(true);

  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audioRef.current = audio;
    audio.loop = false;
    audio.preload = "auto";
    const startAt = 57; // seconds

    const tryPlay = async () => {
      try {
        audio.currentTime = startAt;
      } catch (err) {
        audio.addEventListener("loadedmetadata", () => {
          try { audio.currentTime = startAt; } catch(e) {}
        }, { once: true });
      }

      try {
        await audio.play();
        setAllowedAutoPlay(true);
      } catch (err) {
        setAllowedAutoPlay(false);
      }
    };

    setTimeout(tryPlay, 300);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const handleManualPlay = async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.currentTime = 57;
      await audioRef.current.play();
      setAllowedAutoPlay(true);
    } catch (err) {
      console.error("Playback error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {!allowedAutoPlay && page === 0 && (
        <div className="absolute inset-0 flex items-center justify-center z-40">
          <button
            onClick={handleManualPlay}
            className="px-8 py-4 rounded-full text-xl font-semibold bg-gradient-to-r from-pink-600 to-red-500 shadow-2xl"
          >
            Play music & start
          </button>
        </div>
      )}

      {page === 0 && <Screen1 onNext={() => setPage(1)} />}
      {page === 1 && <Final />}
    </div>
  );
}

export default App;