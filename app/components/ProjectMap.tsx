"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";

export default function ProjectMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const targetRef = useRef<HTMLElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      targetRef.current?.classList.remove("is-targeted");
    };
  }, []);

  const goToProject = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    targetRef.current?.classList.remove("is-targeted");
    targetRef.current = target;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    window.history.replaceState(null, "", `#${id}`);
    target.classList.add("is-targeted");
    timeoutRef.current = window.setTimeout(() => {
      target.classList.remove("is-targeted");
    }, 1800);
  };

  return (
    <nav className="project-map" aria-label="Explore projects through their proteins">
      <ol className="project-map__grid">
        {projects.map((project, index) => {
          const number = String(index + 1).padStart(2, "0");
          const isActive = activeId === project.id;

          return (
            <li className="project-map__entry" key={project.id}>
              <div className="project-map__stage">
                <div className="project-map__image-wrap">
                  <Image
                    src={project.protein.src}
                    alt={`Protein structure ${project.protein.pdb}, representing ${project.title}`}
                    width={project.protein.width}
                    height={project.protein.height}
                    sizes="(max-width: 600px) calc(100vw - 36px), (max-width: 980px) 30vw, 380px"
                    className="project-map__image"
                  />
                </div>
                <svg className="project-map__connector" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d={`M ${project.protein.x} ${project.protein.y} L ${project.protein.x} 72 L 50 86`} />
                </svg>
                <button
                  type="button"
                  className={`protein-hotspot ${isActive ? "is-active" : ""}`}
                  style={{ left: `${project.protein.x}%`, top: `${project.protein.y}%` }}
                  onMouseEnter={() => setActiveId(project.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(project.id)}
                  onBlur={() => setActiveId(null)}
                  onClick={() => goToProject(project.id)}
                  aria-label={`Go to project ${number}: ${project.title}`}
                  aria-controls={project.id}
                >
                  <span>{number}</span>
                </button>
                <button
                  type="button"
                  className={`protein-label ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveId(project.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(project.id)}
                  onBlur={() => setActiveId(null)}
                  onClick={() => goToProject(project.id)}
                  aria-label={`Go to ${project.title} project details`}
                  aria-controls={project.id}
                >
                  <span className="protein-label__index">{number}</span>
                  <span className="protein-label__copy">
                    <strong>{project.title}</strong>
                    <span>{project.category}</span>
                  </span>
                  <span className="project-map__arrow" aria-hidden="true">↓</span>
                </button>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
