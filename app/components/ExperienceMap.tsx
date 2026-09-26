"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { experiences } from "../data/experiences";

export default function ExperienceMap() {
  const stageRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = stage.getBoundingClientRect();
      const viewport = Math.max(window.innerHeight, 1);
      const progress = Math.max(0, Math.min(1, 1 - rect.top / viewport));
      const controlsProgress = Math.max(0, Math.min(1, (progress - 0.55) / 0.2));
      stage.style.setProperty("--map-controls-opacity", `${controlsProgress}`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const goToExperience = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    window.history.replaceState(null, "", `#${id}`);
    target.classList.add("is-targeted");

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      target.classList.remove("is-targeted");
    }, 1800);
  };

  return (
    <section className="protein-map section-wrap" id="experience-map" aria-labelledby="protein-map-heading">
      <div className="protein-map__layout">
        <div className="protein-map__intro">
          <p className="section-label">02 / Experience map</p>
          <h2 id="protein-map-heading">Experience, mapped.</h2>
          <p>
            Explore the structure, then follow a site to the corresponding experience.
          </p>
        </div>

        <figure className="protein-map__figure">
          <div className="protein-map__stage" ref={stageRef}>
            <div className="protein-map__image-wrap">
              <Image
                src="/protein.png"
                alt="Molecular structure illustration used as an interactive map of Felix Tuchscherer’s experience"
                width={2554}
                height={2344}
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 82vw, 980px"
                className="protein-map__image"
              />

            </div>

            {experiences.map((experience, index) => {
              const isActive = activeId === experience.id;
              const position = {
                left: `${experience.hotspot.x}%`,
                top: `${experience.hotspot.y}%`,
              };
              const labelPosition = {
                left: `${experience.hotspot.labelX}%`,
                top: `${experience.hotspot.labelY}%`,
              };

              return (
                <div key={experience.id}>
                  <button
                    type="button"
                    className={`protein-hotspot ${isActive ? "is-active" : ""}`}
                    style={position}
                    onMouseEnter={() => setActiveId(experience.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onFocus={() => setActiveId(experience.id)}
                    onBlur={() => setActiveId(null)}
                    onClick={() => goToExperience(experience.id)}
                    aria-label={`Go to ${experience.role} at ${experience.shortOrganization}`}
                    aria-controls={experience.id}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </button>

                  <button
                    type="button"
                    className={`protein-label ${isActive ? "is-active" : ""}`}
                    style={labelPosition}
                    onMouseEnter={() => setActiveId(experience.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onFocus={() => setActiveId(experience.id)}
                    onBlur={() => setActiveId(null)}
                    onClick={() => goToExperience(experience.id)}
                    aria-controls={experience.id}
                  >
                    <span className="protein-label__index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="protein-label__copy">
                      <strong>{experience.role}</strong>
                      <span>{experience.shortOrganization}</span>
                      <small>{experience.dates}</small>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <figcaption className="protein-map__credit">
            <span className="protein-map__credit-line">
              Molecule of the Month © David S. Goodsell and {" "}
              <a href="https://www.rcsb.org/" target="_blank" rel="noreferrer">RCSB PDB</a>, licensed under {" "}
              <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC-BY-4.0</a>
            </span>
            <span className="protein-map__description">
              This very cool protein complex is called the Mediator and is necessary for
              passing along the signal that tells a gene &apos;start now!&apos; so the cell can
              build the protein it needs through transcription.
            </span>
          </figcaption>
        </figure>

        <div className="protein-map__mobile-list" aria-label="Experience map entries">
          {experiences.map((experience, index) => (
            <button
              type="button"
              key={experience.id}
              onClick={() => goToExperience(experience.id)}
              onFocus={() => setActiveId(experience.id)}
              onBlur={() => setActiveId(null)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>
                <strong>{experience.role}</strong>
                <small>{experience.shortOrganization}</small>
              </span>
              <span aria-hidden="true">↓</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
