import Image from "next/image";

const specialties = [
  {
    number: "01",
    title: "Anxiety & panic",
    text: "Make sense of persistent worry, panic, physical tension, and the feeling that you are always bracing for what comes next. We work with both the thoughts and the body's response.",
    methods: "CBT · Mindfulness · Body-oriented work",
  },
  {
    number: "02",
    title: "Trauma therapy",
    text: "Carefully paced support for single-incident trauma and longer-standing experiences shaped by childhood, relationships, or chronic stress. Safety and stabilization come first.",
    methods: "EMDR · Stabilization · Resourcing",
  },
  {
    number: "03",
    title: "Burnout & perfectionism",
    text: "For professionals, entrepreneurs, and creatives who have been pushing through for a long time. Therapy can help you slow down, reconnect with yourself, and find more sustainable ways to live and work.",
    methods: "CBT · Reflection · Mindfulness",
  },
];

const faqs = [
  {
    question: "Who does Dr. Maya Reynolds work with?",
    answer:
      "Dr. Reynolds works with adults, including professionals, entrepreneurs, and creatives. Many clients are thoughtful and capable on the outside while feeling overwhelmed by anxiety, stress, or past experiences within.",
  },
  {
    question: "What approaches are part of therapy?",
    answer:
      "Her work integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. The approach is collaborative and shaped around your needs rather than a one-size-fits-all plan.",
  },
  {
    question: "What can I expect from trauma therapy?",
    answer:
      "Trauma work is paced carefully, with an emphasis on safety, stabilization, and feeling more regulated in daily life. There is room to build a sense of steadiness before moving into deeper processing.",
  },
  {
    question: "Are sessions in person or online?",
    answer:
      "Both options are available: in-person therapy at the Santa Monica office and secure telehealth sessions for clients located in California.",
  },
];

export default function Home() {
  return (
    <>
      <div className="notice-bar">
        <p>In-person therapy in Santa Monica · Secure telehealth across California</p>
      </div>

      <header className="site-header">
        <div className="site-container mx-auto flex w-full max-w-[1240px] items-center justify-between px-6">
          <a className="wordmark" href="#home" aria-label="Dr. Maya Reynolds, home">
            <span className="wordmark-name">Maya Reynolds</span>
            <span className="wordmark-credential">PsyD · Clinical Psychologist</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#approach">Approach</a>
            <a href="#specialties">Specialties</a>
            <a href="#about">About</a>
            <a href="#office">The office</a>
          </nav>
          <a className="header-link" href="#faqs">Getting started <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-inner site-container mx-auto grid w-full max-w-[1240px] px-6">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-mark" /> Therapy for adults in Santa Monica, California</p>
              <h1>Anxiety &amp; trauma therapy for a life that feels like yours.</h1>
              <p className="hero-description">
                Thoughtful, grounded support for anxiety, panic, trauma, and burnout. You can be capable and still need a place to set everything down.
              </p>
              <div className="hero-actions">
                <a className="button button-coral" href="#specialties">Explore therapy <span aria-hidden="true">↗</span></a>
                <a className="text-link" href="#about">Meet Dr. Reynolds <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-note">
                <span className="note-rule" />
                <p>Warm, collaborative care shaped around the whole of your experience.</p>
              </div>
            </div>
            <div className="hero-portrait-wrap">
              <div className="hero-photo-frame">
                <Image
                  className="hero-portrait"
                  src="/images/maya-reynolds.png"
                  alt="Dr. Maya Reynolds, licensed clinical psychologist"
                  fill
                  priority
                  sizes="(max-width: 768px) 86vw, 45vw"
                />
              </div>
              <div className="portrait-caption"><span>Dr. Maya Reynolds</span><span>PsyD</span></div>
              <div className="hero-stamp" aria-hidden="true"><span>MAKE ROOM</span><b>for yourself</b></div>
            </div>
          </div>
          <div className="hero-bottom site-container mx-auto w-full max-w-[1240px] px-6">
            <span>01 / A steadier way forward</span>
            <span>Santa Monica, CA</span>
          </div>
        </section>

        <section className="welcome section-pad" id="welcome">
          <div className="site-container mx-auto grid w-full max-w-[1240px] px-6 welcome-grid">
            <div className="section-kicker"><span>When the outside looks okay</span><span className="kicker-line" /></div>
            <div className="welcome-copy">
              <h2>You don’t have to keep <em>pushing through</em> alone.</h2>
              <p className="large-copy">
                Maybe you are used to handling a lot. And still, the worry keeps returning, your body stays tense, sleep feels out of reach, or the past keeps shaping the present.
              </p>
              <p>
                Therapy can offer room to slow down and understand what is happening beneath the surface. Together, we can make sense of your experience and find a way forward that feels more sustainable.
              </p>
              <a className="text-link dark-link" href="#approach">A little about the work <span aria-hidden="true">↓</span></a>
            </div>
            <div className="welcome-aside">
              <span className="aside-index">A place to begin</span>
              <div className="aside-quote">“Your experience deserves to be understood, not minimized.”</div>
              <div className="aside-footer"><span>Adults · Santa Monica + California</span><span aria-hidden="true">✳</span></div>
            </div>
          </div>
        </section>

        <section className="client-section section-pad" aria-labelledby="client-heading">
          <div className="site-container mx-auto w-full max-w-[1240px] px-6">
            <div className="client-heading-row">
              <div>
                <p className="eyebrow eyebrow-dark">A practice for adults</p>
                <h2 id="client-heading">For the people who are used to being <em>the capable one.</em></h2>
              </div>
              <p className="client-intro">You may be thoughtful, driven, and self-aware, while privately feeling exhausted, stuck in overthinking, or on edge.</p>
            </div>
            <div className="client-list">
              <article className="client-item">
                <span className="client-number">01</span>
                <h3>Professionals</h3>
                <p>Carrying high expectations at work and finding it hard to switch off.</p>
              </article>
              <article className="client-item">
                <span className="client-number">02</span>
                <h3>Entrepreneurs</h3>
                <p>Holding responsibility for everything while losing touch with your own needs.</p>
              </article>
              <article className="client-item">
                <span className="client-number">03</span>
                <h3>Creatives</h3>
                <p>Wanting more room for feeling, focus, and a sustainable pace.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="expertise section-pad" aria-labelledby="expertise-heading">
          <div className="site-container mx-auto w-full max-w-[1240px] px-6 expertise-grid">
            <div className="expertise-intro">
              <p className="eyebrow eyebrow-light">What we can make room for</p>
              <h2 id="expertise-heading">You are more than what feels <em>hard right now.</em></h2>
              <p>Support begins with your story, your pace, and what you want life to hold next.</p>
            </div>
            <div className="expertise-list">
              <div><span>01</span><p>Anxiety &amp; persistent worry</p><span aria-hidden="true">↗</span></div>
              <div><span>02</span><p>Panic &amp; physical tension</p><span aria-hidden="true">↗</span></div>
              <div><span>03</span><p>Trauma &amp; past experiences</p><span aria-hidden="true">↗</span></div>
              <div><span>04</span><p>Burnout &amp; perfectionism</p><span aria-hidden="true">↗</span></div>
            </div>
          </div>
          <div className="expertise-foot site-container mx-auto w-full max-w-[1240px] px-6"><span>Thoughtful care, without a one-size-fits-all answer.</span><span>02 / Areas of focus</span></div>
        </section>

        <section className="approach section-pad" id="approach">
          <div className="site-container mx-auto grid w-full max-w-[1240px] px-6 approach-grid">
            <div className="approach-image-wrap">
              <Image
                src="/images/office1.jpeg"
                alt="A quiet, light-filled corner of Dr. Reynolds’ Santa Monica therapy office"
                fill
                sizes="(max-width: 768px) 90vw, 42vw"
                className="approach-image"
              />
              <div className="image-label"><span>Room to pause</span><span>Santa Monica, CA</span></div>
            </div>
            <div className="approach-copy">
              <p className="eyebrow eyebrow-dark">A grounded, collaborative approach</p>
              <h2>Practical tools, with room for <em>depth.</em></h2>
              <p className="large-copy">Therapy can be structured enough to feel supportive and open enough to meet what is real for you.</p>
              <p>We may look at patterns and practice useful tools, while also making space for emotions and the body&apos;s response. You stay actively involved in shaping the work.</p>
              <div className="modality-list" aria-label="Therapy approaches">
                <span>CBT</span><span>EMDR</span><span>Mindfulness</span><span>Body-oriented techniques</span>
              </div>
              <a className="text-link dark-link" href="#specialties">Explore areas of focus <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="specialties section-pad" id="specialties">
          <div className="site-container mx-auto w-full max-w-[1240px] px-6">
            <div className="specialties-heading">
              <div><p className="eyebrow eyebrow-dark">Where we can begin</p><h2>Support for what you’re <em>carrying.</em></h2></div>
              <p>Therapy for anxiety, trauma, and burnout in Santa Monica, with secure online sessions throughout California.</p>
            </div>
            <div className="specialty-grid">
              {specialties.map((specialty) => (
                <article className="specialty-card" key={specialty.number}>
                  <div className="specialty-top"><span>{specialty.number}</span><span className="specialty-spark" aria-hidden="true">✳</span></div>
                  <h3>{specialty.title}</h3>
                  <p>{specialty.text}</p>
                  <div className="specialty-methods">{specialty.methods}</div>
                  <a href="#faqs" aria-label={`Learn about ${specialty.title}`}>Learn about this work <span aria-hidden="true">↗</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="site-container mx-auto w-full max-w-[1240px] px-6 about-grid">
            <div className="about-heading">
              <p className="eyebrow eyebrow-light">A little about me</p>
              <h2>Meet Dr. Maya Reynolds<span className="coral-dot">.</span></h2>
              <p className="about-credential">PsyD · Licensed Clinical Psychologist</p>
              <div className="about-mark" aria-hidden="true">MR</div>
            </div>
            <div className="about-copy">
              <p className="about-lede">I’m a clinical psychologist in Santa Monica, and I work with adults navigating anxiety, stress, trauma, and burnout.</p>
              <p>My approach is warm, collaborative, and grounded. I draw on evidence-based methods while staying curious about the emotional and physiological sides of what you are experiencing.</p>
              <p>My goal is not only symptom relief, but greater insight, resilience, and a stronger relationship with yourself over time. I believe the work is most useful when you feel respected, understood, and actively involved.</p>
              <div className="about-signoff"><span className="signature">Maya</span><span>Here with you, at your pace.</span></div>
            </div>
          </div>
        </section>

        <section className="office section-pad" id="office">
          <div className="site-container mx-auto w-full max-w-[1240px] px-6">
            <div className="office-heading">
              <div><p className="eyebrow eyebrow-dark">A new place to land</p><h2>Our office, in <em>Santa Monica.</em></h2></div>
              <p>A quiet, private space with natural light and a comfortable, uncluttered feel. You can also meet with Dr. Reynolds through secure telehealth anywhere in California.</p>
            </div>
            <div className="office-gallery">
              <figure className="office-photo office-photo-main">
                <Image src="/images/office1.jpeg" alt="The light-filled seating area in Dr. Reynolds’ office" fill sizes="(max-width: 768px) 90vw, 55vw" />
                <figcaption><span>01</span> A calm place to arrive</figcaption>
              </figure>
              <div className="office-side">
                <figure className="office-photo office-photo-detail">
                  <Image src="/images/office2.jpeg" alt="A second view of the private therapy office" fill sizes="(max-width: 768px) 90vw, 30vw" />
                  <figcaption><span>02</span> Thoughtfully kept</figcaption>
                </figure>
                <div className="office-address">
                  <span className="address-icon" aria-hidden="true">⌖</span>
                  <div><span>In-person sessions</span><p>Santa Monica, California</p></div>
                  <span className="address-arrow" aria-hidden="true">↗</span>
                </div>
              </div>
            </div>
            <p className="office-note">In person in Santa Monica <span>·</span> Secure telehealth for California residents</p>
          </div>
        </section>

        <section className="faqs section-pad" id="faqs">
          <div className="site-container mx-auto grid w-full max-w-[1240px] px-6 faq-grid">
            <div className="faq-intro"><p className="eyebrow eyebrow-dark">A few things you may be wondering</p><h2>Starting can feel like a <em>big step.</em></h2><p>Here are a few details about the work and what is available.</p><a className="text-link dark-link" href="#office">See the office <span aria-hidden="true">↓</span></a></div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="closing section-pad">
          <div className="site-container mx-auto w-full max-w-[1240px] px-6 closing-inner">
            <p className="eyebrow eyebrow-light">Therapy for adults · Santa Monica, California</p>
            <h2>There is room to understand what you’re carrying.</h2>
            <p>In-person therapy in Santa Monica and secure telehealth across California.</p>
            <a className="button button-light" href="#office">Find your way to the office <span aria-hidden="true">↗</span></a>
          </div>
          <div className="closing-glyph" aria-hidden="true">M</div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container mx-auto w-full max-w-[1240px] px-6 footer-main">
          <div><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-name">Maya Reynolds</span><span className="wordmark-credential">PsyD · Clinical Psychologist</span></a><p>Care for anxiety, trauma, and burnout.<br />Santa Monica, California.</p></div>
          <div className="footer-nav"><span>Explore</span><a href="#approach">Approach</a><a href="#specialties">Specialties</a><a href="#about">About Dr. Reynolds</a><a href="#office">Our office</a><a href="#faqs">FAQs</a></div>
          <div className="footer-location"><span>Visit or connect</span><p>Santa Monica, California</p><p>In-person sessions<br />Secure telehealth across California</p></div>
        </div>
        <div className="site-container mx-auto w-full max-w-[1240px] px-6 footer-bottom"><span>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD</span><span>Licensed Clinical Psychologist · Santa Monica, CA</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </>
  );
}
