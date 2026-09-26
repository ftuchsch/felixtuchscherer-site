import Image from "next/image";
import Link from "next/link";
import ExperienceMap from "./components/ExperienceMap";
import LandingFade from "./components/LandingFade";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { experiences } from "./data/experiences";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader current="home" />

      <main>
        <div className="home-opening">
          <LandingFade>
            <div className="home-intro__copy">
              <p className="eyebrow">Computational biology · Protein modeling</p>
              <h1 id="intro-heading">Felix Tuchscherer</h1>
              <p className="home-intro__dek">
                Boston University - Double major in CS &amp; Cell/Mol Bio &apos;27
              </p>
              <p className="home-intro__body">
                Hey! I&apos;m Felix. Born in France, grew up in California, and now I study in Boston.
                I&apos;m interested in the intersection between ML and biology. With all of our
                advancements in AI, I believe a lot of it can be used to unravel the arcana of
                biology. Cancer, aging, genetic disorders, and many more diseases will likely
                see treatments or cures within the next few decades.
                <strong> I yearn to be at that forefront.</strong>
              </p>
            </div>

            <article className="home-writing-card" aria-labelledby="featured-writing-title">
              <div className="home-writing-card__topline">
                <p className="section-label">01 / Featured writing</p>
                <time dateTime="2026-03-28">03.28.26</time>
              </div>
              <h2 id="featured-writing-title">
                <Link href="/blog/begginers-guide-to-openclaw">
                  Beginner’s guide to OpenClaw
                </Link>
              </h2>
              <p>
                OpenClaw can save time, effort, and money by acting as an AI assistant that takes actions for you. Here is a beginner-friendly walkthrough for getting it running with Telegram and Gmail.
              </p>
              <div className="home-writing-card__links">
                <Link className="story-link" href="/blog/begginers-guide-to-openclaw">
                  Read essay <span aria-hidden="true">→</span>
                </Link>
                <Link className="story-link" href="/blog">
                  All writing <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          </LandingFade>

        </div>

        <ExperienceMap />

        <section className="experience-details section-wrap" id="experience">
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article className="experience-row" id={experience.id} key={experience.id}>
                <div className="experience-row__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="experience-row__title">
                  <p className="experience-row__category">{experience.category}</p>
                  <h3>
                    <a href={experience.href} target="_blank" rel="noreferrer">
                      {experience.organization} <span aria-hidden="true">↗</span>
                    </a>
                  </h3>
                  <p>{experience.role}</p>
                </div>
                <div className="experience-row__meta">
                  <p>{experience.location}</p>
                  <p>{experience.dates}</p>
                </div>
                <div className="experience-row__content">
                  {experience.sections.map((section, sectionIndex) => (
                    <section className="experience-subsection" key={section.title ?? sectionIndex}>
                      {section.title && (
                        <div className="experience-subsection__heading">
                          <h4>{section.title}</h4>
                          {section.dates && <p>{section.dates}</p>}
                        </div>
                      )}
                      <ul className="experience-row__details">
                        {section.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-heading">
          <div className="about-section__aside">
            <p className="section-label">04 / About</p>
            <Image
              src="/headshot.png"
              alt="Headshot of Felix Tuchscherer"
              width={428}
              height={428}
              className="about-section__portrait"
            />
          </div>
          <div className="about-section__body">
            <h2 id="about-heading">Curious about what makes living systems work.</h2>
            <p>
              In my free time, I train Brazilian Jiu-Jitsu (4 stripe white belt; hopefully
              blue soon!!), read fiction (Brandon Sanderson is my favorite author), and
              explore the world. <strong> Life is ephemeral, and I hope to relish it. </strong>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
