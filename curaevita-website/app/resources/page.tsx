import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteFooter, SiteHeader } from '../components/site-shell';
import { JsonLd } from '../components/json-ld';
import { companions } from '../lib/apps';
import { diaryResources } from '../lib/resources';

export const metadata: Metadata = {
  title: 'Free Printable Health Diaries: GLP-1, Menopause, ADHD, Gut and Migraine',
  description: 'Download free printable PDF diaries for GLP-1 injections, menopause symptoms, ADHD medication, meals and digestive symptoms, and migraine attacks. No sign-up.',
  alternates: { canonical: '/resources/' },
  openGraph: { title: 'Free printable diaries from CuraeVita', description: 'Five practical PDF diaries. No account or email needed. Keep your notes private and prepare for your next appointment.', url: '/resources/', images: [{url:'/og.png',width:1200,height:630,alt:'CuraeVita health tracking resources'}] },
};

export default function ResourcesPage() {
  return <main className="inner-shell">
    <JsonLd data={{ '@context':'https://schema.org', '@type':'CollectionPage', url:'https://curaevita.com/resources/', name:'Free printable health diaries', inLanguage:'en-GB', isPartOf:{'@id':'https://curaevita.com/#website'}, mainEntity:{'@type':'ItemList', itemListElement:diaryResources.map((resource,index)=>({'@type':'ListItem',position:index+1,name:resource.title,url:`https://curaevita.com/downloads/${resource.id}-diary.pdf`}))} }} />
    <SiteHeader compact />
    <section className="directory-hero">
      <p className="eyebrow"><span /> Free resources, no sign-up</p>
      <h1>A useful record starts with a little space to write.</h1>
      <p>Five free printable diaries for the facts you want to remember. Download an A4 PDF, print as many blank copies as you need, and bring your questions to your next appointment.</p>
      <a className="text-link" href="/apps/">Prefer a diary on your Android phone? Explore the apps →</a>
    </section>
    <section className="guide-directory" aria-label="Free PDF diary downloads">
      {diaryResources.map(resource=>{
        const app=companions.find(item=>item.slug===resource.slug)!;
        return <article className="guide-card resource-card" key={resource.id} id={resource.id}>
          <Image src={app.image} alt="" width={56} height={56} loading="lazy" />
          <p className="card-kicker">Free printable • A4 • 1 page</p>
          <h2>{resource.title}</h2>
          <p>{resource.description}</p>
          <a className="button button-primary" href={`/downloads/${resource.id}-diary.pdf`} download>Download PDF diary ↓</a>
          <div className="resource-links">
            <a className="text-link" href={`/guides/${resource.guide}/`}>What to record →</a>
            <a className="text-link" href={`/apps/${resource.slug}/`}>Explore {app.name} →</a>
          </div>
        </article>;
      })}
    </section>
    <section className="content-section faq-section">
      <div className="content-heading"><p className="eyebrow"><span /> Before you start</p><h2>Keep the record useful, and yours.</h2></div>
      <div className="faq-list">
        <details><summary>Are these diaries really free?</summary><p>Yes. There is no payment, email gate or app subscription required to download or print these blank PDFs. The Android apps are separate paid subscriptions: £0.99 per month per app in the UK after any eligible seven-day free trial. Google Play confirms local prices and eligibility.</p></details>
        <details><summary>Can I share them?</summary><p>You may share the original blank templates or this public resources page with friends, a support group or a professional. Do not publish a completed diary containing anyone’s personal health information.</p></details>
        <details><summary>Do they tell me what treatment to take?</summary><p>No. They help organise your own observations and questions. They cannot diagnose a condition, identify a trigger or recommend a treatment change. Follow the instructions from your healthcare professional; do not wait to fill in a diary if you need help.</p></details>
        <details><summary>Where are my completed entries stored?</summary><p>A printed PDF stays wherever you keep it. Downloading the blank template does not send diary entries to CuraeVita. Keep completed paper or digital copies securely and choose carefully who receives them.</p></details>
      </div>
    </section>
    <aside className="share-section"><div><p className="eyebrow"><span /> Share something useful</p><h2>Send a blank diary, not private health notes.</h2><p>Know someone who prefers paper? These resources are available without an account.</p></div><div className="share-links"><a href={`https://wa.me/?text=${encodeURIComponent('Free printable health diaries from CuraeVita, no sign-up: https://curaevita.com/resources/')}`} rel="external">Share by WhatsApp</a><a href="mailto:?subject=Free%20printable%20health%20diaries&body=https%3A%2F%2Fcuraevita.com%2Fresources%2F">Share by email</a></div></aside>
    <SiteFooter />
  </main>;
}
