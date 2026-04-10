"use client";

import { useEffect, useRef } from "react";
import useMapAnimation from "@/hooks/useMapAnimation";
import "./MapSection.scss";

const LAT = 51.25127075425786;
const LNG = -1.0855206229821315;

const MapSection = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  const {
    sectionRef,
    cardRef,
    labelRef,
    headingRef,
    detailsRef,
    ctaRef,
    mapRef,
  } = useMapAnimation();

  useEffect(() => {
    if (mapInstanceRef.current || !mapContainerRef.current) return;

    import("leaflet").then((L) => {
      if (mapInstanceRef.current || !mapContainerRef.current) return;

      import("leaflet/dist/leaflet.css");

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

      L.marker([LAT, LNG], { icon })
        .addTo(map)
        .bindPopup(
          `<div class="map-popup">
            <strong>Sycamore Cottage</strong>
            <span>Skippetts Lane West, Basingstoke</span>
          </div>`,
          { className: "map-popup-wrap", offset: [0, -8] },
        )
        .openPopup();

      L.control.zoom({ position: "bottomright" }).addTo(map);

      mapInstanceRef.current = map;
      mapRef.current = map;
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <section className="map-section" id="find-us" ref={sectionRef}>
      <div className="map-section-inner">
        {/* ── Map fills left ── */}
        <div ref={mapContainerRef} className="map-container" />

        {/* ── Info panel right ── */}
        <div className="map-panel" ref={cardRef}>
          <span className="map-panel-label" ref={labelRef}>
            Find Us
          </span>

          <div className="map-panel-details" ref={headingRef}>
            <div
              className="map-panel-item"
              ref={(el) => {
                if (el) detailsRef.current[0] = el;
              }}
            >
              <span className="map-panel-item-label">Address</span>
              <span className="map-panel-item-value">
                Skippetts Lane West
                <br />
                Basingstoke, Hampshire
                <br />
                RG21 3NR
              </span>
            </div>

            <div
              className="map-panel-item"
              ref={(el) => {
                if (el) detailsRef.current[1] = el;
              }}
            >
              <span className="map-panel-item-label">Phone</span>
              <span className="map-panel-item-value">01256 478952</span>
            </div>

            <div
              className="map-panel-item"
              ref={(el) => {
                if (el) detailsRef.current[2] = el;
              }}
            >
              <span className="map-panel-item-label">Visiting Hours</span>
              <span className="map-panel-item-value">
                Mon – Sun, 9:00am – 8:00pm
              </span>
            </div>
          </div>

          <a
            className="map-panel-cta"
            ref={ctaRef}
            href={`https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
