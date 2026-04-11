"use client";

import { useEffect, useRef, useCallback } from "react";
import useMapAnimation from "@/hooks/useMapAnimation";
import "./MapSection.scss";

const LAT = 51.25127075425786;
const LNG = -1.0855206229821315;

const MapSection = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const isInitializedRef = useRef(false);

  const {
    sectionRef,
    cardRef,
    labelRef,
    headingRef,
    detailsRef,
    ctaRef,
    mapRef,
  } = useMapAnimation();

  // Initialize map
  const initMap = useCallback(async () => {
    if (isInitializedRef.current || !mapContainerRef.current) return;

    try {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      if (isInitializedRef.current || !mapContainerRef.current) return;

      const map = L.map(mapContainerRef.current, {
        center: [LAT, LNG],
        zoom: 15,
        zoomControl: false,
        scrollWheelZoom: false,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        },
      ).addTo(map);

      const icon = L.divIcon({
        className: "map-custom-pin",
        html: `
          <div class="map-pin-wrap">
            <div class="map-pin-pulse"></div>
            <div class="map-pin-pulse map-pin-pulse-2"></div>
            <div class="map-pin-dot"></div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20],
      });

      const marker = L.marker([LAT, LNG], { icon }).addTo(map);

      marker.bindPopup(
        `<div class="map-popup">
          <strong>Sycamore Cottage</strong>
          <span>Skippetts Lane West, Basingstoke</span>
        </div>`,
        { className: "map-popup-wrap", offset: [0, -8] },
      );

      // Open popup with a small delay to ensure map is fully rendered
      setTimeout(() => {
        marker.openPopup();
      }, 100);

      L.control.zoom({ position: "bottomright" }).addTo(map);

      mapInstanceRef.current = map;
      mapRef.current = map;
      isInitializedRef.current = true;

      // Force invalidate after initialization
      setTimeout(() => {
        map.invalidateSize();
        map.setView([LAT, LNG], 15, { animate: false });
      }, 50);
    } catch (error) {
      console.error("Failed to initialize map:", error);
    }
  }, [mapRef]);

  useEffect(() => {
    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        mapRef.current = null;
        isInitializedRef.current = false;
      }
    };
  }, [initMap, mapRef]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (mapInstanceRef.current) {
        setTimeout(() => {
          mapInstanceRef.current.invalidateSize();
          mapInstanceRef.current.setView([LAT, LNG], 15, { animate: false });
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="map-section" id="find-us" ref={sectionRef}>
      {/* ── Full bleed map ── */}
      <div ref={mapContainerRef} className="map-container" />

      {/* ── Floating card ── */}
      <div className="map-floating-card" ref={cardRef}>
        {/* Badge */}
        <div className="map-card-badge" ref={labelRef}>
          <span className="map-card-badge-text">Location</span>
        </div>

        {/* Heading */}
        <h3 className="map-card-heading" ref={headingRef}>
          Visit <em>Sycamore Cottage</em>
        </h3>

        {/* Details */}
        <div className="map-card-details">
          <div
            className="map-card-item"
            ref={(el) => {
              if (el) detailsRef.current[0] = el;
            }}
          >
            <div className="map-card-item-icon">
              <svg
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 2C5.3 2 4 3.3 4 5c0 2.5 3 7 3 7s3-4.5 3-7c0-1.7-1.3-3-3-3z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="7"
                  cy="5"
                  r="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="map-card-item-content">
              <span className="map-card-item-label">Address</span>
              <span className="map-card-item-value">
                Skippetts Lane West, Basingstoke RG21 3NR
              </span>
            </div>
          </div>

          <div
            className="map-card-item"
            ref={(el) => {
              if (el) detailsRef.current[1] = el;
            }}
          >
            <div className="map-card-item-icon">
              <svg
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2H3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1zM7 2v10M2 7h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="map-card-item-content">
              <span className="map-card-item-label">Hours</span>
              <span className="map-card-item-value">
                Mon – Sun, 9:00am – 8:00pm
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          className="map-card-cta"
          ref={ctaRef}
          href={`https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Get Directions</span>
          <svg
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5h6M6 2l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default MapSection;
