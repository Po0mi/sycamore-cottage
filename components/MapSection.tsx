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
      <div ref={mapContainerRef} className="map-container" />
      <div className="map-card" ref={cardRef}>
        <div className="map-card-label" ref={labelRef}>
          <span className="map-card-label-text">Find Us</span>
        </div>
        <h2 className="map-card-heading" ref={headingRef}>
          Come visit
          <br />
          <em>Sycamore Cottage.</em>
        </h2>
        <div className="map-card-details">
          <div
            className="map-card-detail-item"
            ref={(el) => {
              if (el) detailsRef.current[0] = el;
            }}
          >
            <div className="map-card-detail-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2C7.2 2 5 4.2 5 7c0 4 5 11 5 11s5-7 5-11c0-2.8-2.2-5-5-5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="10"
                  cy="7"
                  r="1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="map-card-detail-body">
              <h5>Address</h5>
              <p>
                Skippetts Lane West
                <br />
                Basingstoke, Hampshire
                <br />
                RG21 3NR
              </p>
            </div>
          </div>

          <div
            className="map-card-detail-item"
            ref={(el) => {
              if (el) detailsRef.current[1] = el;
            }}
          >
            <div className="map-card-detail-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5a2 2 0 012-2h1.5l2 4.5-1.5 1.5a11 11 0 005 5l1.5-1.5L17 14.5V16a2 2 0 01-2 2A13 13 0 013 5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="map-card-detail-body">
              <h5>Phone</h5>
              <p>01256 478952</p>
            </div>
          </div>

          <div
            className="map-card-detail-item"
            ref={(el) => {
              if (el) detailsRef.current[2] = el;
            }}
          >
            <div className="map-card-detail-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 6v4l2.5 2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="map-card-detail-body">
              <h5>Visiting Hours</h5>
              <p>
                Monday – Sunday
                <br />
                9:00am – 8:00pm
              </p>
            </div>
          </div>
        </div>

        <a
          className="map-card-cta"
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
    </section>
  );
};

export default MapSection;
