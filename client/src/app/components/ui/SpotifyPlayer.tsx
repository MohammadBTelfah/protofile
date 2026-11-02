
"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaSpotify,
  FaSnowflake,
  FaGuitar,
  FaHeadphones,
} from "react-icons/fa6";

type SpotifyController = {
  loadUri: (uri: string) => void;
  play: () => void;
  pause: () => void;
  addListener: (
    event: "playback_update",
    callback: (event: {
      data: {
        isPaused: boolean;
        isBuffering: boolean;
      };
    }) => void
  ) => void;
  destroy: () => void;
};

type SpotifyAPI = {
  createController: (
    element: HTMLElement,
    options: {
      width: string;
      height: string;
      uri: string;
    },
    callback: (controller: SpotifyController) => void
  ) => void;
};

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyAPI) => void;
    __spotifyIframeApi?: SpotifyAPI;
  }
}

const tracks = [
  {
    title: "Show Me How",
    artist: "Men I Trust",
    uri: "spotify:track:75IQVo8hqI1iwVZyvkN2VT",
    url: "https://open.spotify.com/track/75IQVo8hqI1iwVZyvkN2VT",
  },
  {
    title: "Numb",
    artist: "Men I Trust",
    uri: "spotify:track:6Ijmj8Z0L31hCp5pLZnT5U",
    url: "https://open.spotify.com/track/6Ijmj8Z0L31hCp5pLZnT5U",
  },
  {
    title: "Lauren",
    artist: "Men I Trust",
    uri: "spotify:track:62zFcDLa1CjCY9yp6VO4ga",
    url: "https://open.spotify.com/track/62zFcDLa1CjCY9yp6VO4ga",
  },
];

export default function SpotifyPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [playerReady, setPlayerReady] = useState(false);

  const playerElement = useRef<HTMLDivElement>(null);
  const controller = useRef<SpotifyController | null>(null);

  // Initialize Spotify Player
  useEffect(() => {
    let cancelled = false;

    const initializePlayer = (api: SpotifyAPI) => {
      if (
        cancelled ||
        !playerElement.current ||
        controller.current
      ) {
        return;
      }

      api.createController(
        playerElement.current,
        {
          width: "100%",
          height: "152",
          uri: tracks[0].uri,
        },
        (embedController) => {
          if (cancelled) {
            embedController.destroy();
            return;
          }

          controller.current = embedController;
          setPlayerReady(true);

          embedController.addListener("playback_update", (event) => {
            setIsPlaying(
              !event.data.isPaused && !event.data.isBuffering
            );
          });
        }
      );
    };

    if (window.__spotifyIframeApi) {
      initializePlayer(window.__spotifyIframeApi);
    } else {
      window.onSpotifyIframeApiReady = (api) => {
        window.__spotifyIframeApi = api;
        initializePlayer(api);
      };

      const existingScript = document.querySelector(
        'script[src="https://open.spotify.com/embed/iframe-api/v1"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src =
          "https://open.spotify.com/embed/iframe-api/v1";
        script.async = true;
        document.body.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      controller.current?.destroy();
      controller.current = null;
    };
  }, []);

  // Change Track
  const playTrack = (index: number) => {
    setSelectedTrack(index);

    if (!controller.current || !playerReady) return;

    controller.current.loadUri(tracks[index].uri);
    controller.current.play();
  };

  const currentTrack = tracks[selectedTrack];

  return (
    <div className="spotify-wrapper">
      {/* Spotify Trigger */}
      <button
        type="button"
        className={`spotify-trigger ${
          isPlaying ? "is-playing" : ""
        }`}
        onClick={() => setIsOpen((value) => !value)}
        aria-label="Open Spotify player"
        title="Spotify"
        aria-expanded={isOpen}
      >
        {/* Spotify Logo - Always Visible */}
        <FaSpotify
          size={25}
          className="spotify-icon"
        />

        {/* Equalizer - Only When Playing */}
        {isPlaying && (
          <span className="music-equalizer" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        )}

        <svg
          className="social-hover-line"
          viewBox="0 0 40 26"
          aria-hidden="true"
        >
          <path d="M2 13 C8 24 24 25 30 14 C36 3 23 0 16 5 C8 11 15 20 24 17 C30 16 35 11 38 7" />
        </svg>
      </button>

      {/* Spotify Popup */}
      <div
        className={`spotify-popup ${
          isOpen ? "is-open" : "is-closed"
        }`}
      >
        <div className="spotify-popup-header">
          <div>
            <span className="spotify-eyebrow">
              NOW PLAYING
            </span>
            <h3>Change Track</h3>
          </div>

          <button
            type="button"
            className="spotify-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close Spotify"
          >
            ×
          </button>
        </div>

        {/* Track Selection */}
        <div className="spotify-moods">
          <button
            type="button"
            className={selectedTrack === 0 ? "active" : ""}
            onClick={() => playTrack(0)}
            aria-label="Show Me How"
          >
            <FaSnowflake />
          </button>

          <button
            type="button"
            className={selectedTrack === 1 ? "active" : ""}
            onClick={() => playTrack(1)}
            aria-label="Numb"
          >
            <FaGuitar />
          </button>

          <button
            type="button"
            className={selectedTrack === 2 ? "active" : ""}
            onClick={() => playTrack(2)}
            aria-label="Lauren"
          >
            <FaHeadphones />
          </button>
        </div>

        <div className="spotify-divider" />

        <div className="spotify-section-title">
          <FaSpotify size={21} />
          <span>Top on Spotify</span>
        </div>

        {/* Current Track */}
        <div className="spotify-track">
          <div className="spotify-track-info">
            <strong>{currentTrack.title}</strong>
            <span>{currentTrack.artist}</span>
          </div>
        </div>

        {/* Spotify Embed */}
        <div
          className="spotify-embed-player"
          ref={playerElement}
        />

        {/* Listen on Spotify */}
        <a
          className="spotify-listen"
          href={currentTrack.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen on Spotify ↗
        </a>
      </div>
    </div>
  );
}
