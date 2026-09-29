import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

const title = "Getting Started on PhD Applications: 3 Things That Helped Me";
const description =
  "Three practical ways to make PhD applications feel less intimidating: build a focused program list, reflect on what excites you, and consider the NSF GRFP.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog/getting-started-on-phd-applications",
  },
  openGraph: {
    title,
    description,
    url: "https://www.felixtuchscherer.com/blog/getting-started-on-phd-applications",
    siteName: "Felix Tuchscherer",
    type: "article",
    publishedTime: "2026-09-29",
    images: [
      {
        url: "https://www.felixtuchscherer.com/site-preview.png",
        width: 1200,
        height: 630,
        alt: "Felix Tuchscherer’s homepage featuring the PhD applications article",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://www.felixtuchscherer.com/site-preview.png"],
  },
};

export default function GettingStartedOnPhdApplicationsPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="writing" />
      <main className="article-page">
        <article className="article-shell">
          <header className="article-header">
            <Link className="article-back" href="/blog">
              ← All writing
            </Link>
            <p className="eyebrow">Guide · Grad school</p>
            <h1>{title}</h1>
            <div className="article-header__meta">
              <time dateTime="2026-09-29">September 29, 2026</time>
              <span>4 minute read</span>
            </div>
          </header>

          <p>
            Hello! In this blog I will walk you through some things that helped me get started on my PhD
            applications.
          </p>
          <p>
            I am by absolutely no means an expert, but I have recently started preparing my PhD applications, and it
            was honestly very intimidating at first! Not knowing where to start climbing and looking up at the
            intermeshed wall of programs, essays, fellowships, recommendation letters, and more lends itself to
            procrastination. I’m hoping putting this out there might help even just one other person going through
            something similar.
          </p>
          <p>
            This will give you an outline of things you can get started on to get the ball rolling. I’ve found that
            PhD applications are like going out for a run. If you can tie your shoes and get going, it’s genuinely
            fun! After all, you <strong>get</strong> to look at a myriad of extremely cool and fascinating research
            labs and envision the future of your life at each one. Who doesn’t love to daydream?
          </p>

          <h3>1) Developing your program list</h3>
          <p>
            This was the first thing I started with. Try to find out what your non-negotiables are. For some, it’s
            weather and proximity to home; for others, it’s cost of living and program size. For me, it was research
            fit and a city-based campus.
          </p>
          <p>
            Once you know what matters to you the most, sort through options while keeping it at heart! Don’t add
            places to your list where you think, “Ehhhh, I’ll just apply here in case I don’t get anything else.” With
            so many universities and programs out there, each one on your list should be somewhere you can truly see
            yourself going. You have to find the right fit! From everything I have read and heard, a targeted approach
            is much better than simply trying to “spray and pray.”
          </p>
          <p>
            Speaking of a list, I used this{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1NNy3OMYm8YFQmTnWNNLjrfNuq-vpiJcEHlhUK5vEm9Y/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              spreadsheet
            </a>{" "}
            that you can download a copy of and fill out as you find your programs.
          </p>

          <h3>2) What do you want to do in life?</h3>
          <p>
            Before you can write any essays, I think it’s important to do some internal reflection. Whether it’s with
            pen and paper, typing in your notes, or even in a vocal conversation with an LLM, try to figure out what
            actually excites you. What kinds of research questions do you keep coming back to? What parts of your past
            experiences have made you think, “I could do this for a really long time”? And just as importantly, what
            do you want your life after the PhD to look like?
          </p>
          <p>
            You absolutely do not need to have everything figured out. I certainly don’t! But having a general
            direction makes writing about yourself so much easier. For me, I realized that I am most excited by
            developing computational methods around biological problems, especially when something does not work as
            expected and figuring out why becomes the interesting part. I also realized that, long term, I want
            research, teaching, and mentorship to all be part of my career. Once I could put those ideas into words,
            the rest of the application process started to feel much less abstract.
          </p>

          <h3>3) Consider applying to the NSF GRFP</h3>
          <p>
            With the cuts to research funding, a lot of programs simply have less money to support PhD students. The
            NSF GRFP is a chance to bring your own funding with you, which can make you an easier student for a program
            or lab to support.
          </p>
          <p>
            The GRFP is open to eligible U.S. citizens, nationals, and permanent residents who are entering or early
            in an eligible research-based STEM graduate degree. You can check the{" "}
            <a
              href="https://www.nsf.gov/funding/initiatives/grfp/eligibility"
              target="_blank"
              rel="noopener noreferrer"
            >
              NSF eligibility requirements
            </a>
            .
          </p>
          <p>
            Even if you don’t get it, I think the application itself is worth doing! It forces you to start thinking
            about your research interests, future goals, and why you actually want a PhD. These are all things you’ll
            need to figure out for your applications anyway.
          </p>
          <p>
            I learned about this myself last week, and a good guide I’ve been using is{" "}
            <a href="https://www.alexhunterlang.com/nsf-fellowship" target="_blank" rel="noopener noreferrer">
              Alex Lang’s NSF Fellowship guide
            </a>
            .
          </p>
          <hr className="article-divider" />
          <p>
            That’s it! I also want to say that if you’re just starting your applications now, you aren’t too late.
            Most program deadlines are December 1. For the{" "}
            <a
              href="https://www.nsf.gov/funding/initiatives/grfp"
              target="_blank"
              rel="noopener noreferrer"
            >
              2027 GRFP competition
            </a>
            , reference letters are due October 16 at 8:00 p.m. EST, and applications are due October 19-23
            depending on your field. Tie your shoes and get moving!!!
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
