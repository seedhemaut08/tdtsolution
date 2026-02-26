import React from "react"
import { Link } from "react-router-dom"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps"

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const locations = [
  { name: "INDIA", coordinates: [78.9629, 20.5937] },
  { name: "USA", coordinates: [-95.7129, 37.0902] },
  { name: "CANADA", coordinates: [-106.3468, 56.1304] }
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="blob" aria-hidden></div>

      <div className="container hero-grid">
        <div>
          <h1 className="fade-up">We turn data into growth — fast.</h1>

          <p className="lead fade-up delay-1">
            TDTS helps businesses accelerate with beautiful product design,
            robust engineering, and AI-driven insights.
          </p>

          <div className="cta-row fade-up delay-2">
            <Link to="/services" className="btn">Explore Services</Link>
            <Link to="/contact" className="muted-btn">Get in touch</Link>
          </div>
        </div>

        {/* FLOATING BOX */}
        <div>
          <div className="floating-box fade-up delay-2">
            <h3>Your partner for IT & Non-IT excellence</h3>
            <p className="small">
              Explore how we streamline processes with innovation.
            </p>

            <div className="map-container">
              <div className="map-title">TDT SOLUTIONS</div>

              <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={{ scale: 140 }}
                style={{ width: "100%", height: "260px" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#111827"
                        stroke="#374151"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#1f2937", outline: "none" },
                          pressed: { outline: "none" }
                        }}
                      />
                    ))
                  }
                </Geographies>

                {locations.map((loc) => (
                  <Marker key={loc.name} coordinates={loc.coordinates}>
                    <circle
                      r={5}
                      fill="#ff3b3b"
                      className="pulse-dot"
                    />
                    <text
                      textAnchor="middle"
                      y={-10}
                      style={{
                        fill: "#fff",
                        fontSize: "9px",
                        fontWeight: "600"
                      }}
                    >
                      {loc.name}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}