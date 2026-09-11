### Key Drawbacks of LinkedIn-Only CTAs

* **Friction for Non-LinkedIn Users:** Engineering managers, founders, or enterprise clients who don't browse LinkedIn while working (or don't want to send a connection request first) may hesitate to reach out.
* **Low Visibility in the Footer:** Small social icons in the footer are passive. They don't signal that you are actively available for senior roles or contract/consulting work.

---

### Recommended Approaches

**1. Add a Dedicated Contact/Availability Section (Best Solution)**
Add a clean, low-friction section at the bottom of your `/experience` (or `/`) page before the footer. State your current availability explicitly, and give visitors two distinct paths to reach out:

* **Primary CTA:** A link to a lightweight contact form (or a privacy-focused contact method).
* **Secondary CTA:** Direct link to your LinkedIn profile.

> **Example Callout Block:**
> **Interested in working together?**
> *"I'm currently available for senior product engineering roles and select contract/advisory engagements."*
> `[ Reach Out via LinkedIn ↗ ]` `[ Send an Email ]`

---

**2. Anti-Spam Email Techniques (If you want to offer email)**
If you want to provide an email option without getting spammed, consider these options:

* **Obfuscated / Anti-Scrape Email:** Display your email using custom rendering or HTML entities (e.g., `ankur [at] iamankurj [dot] com` or a button that opens a pre-filled mail client via JS) so simple web crawlers can't scrape it.
* **Subdomain / Forwarding Alias:** Use an alias like `hello@iamankurj.com` or `work@iamankurj.com` routed through a spam filter (like Cloudflare Email Routing or SimpleLogin). You can burn or filter the alias instantly if it receives spam.
* **Lightweight Contact Form / Modal:** A simple embedded 3-field form (Name, Email, Message) using a serverless handler (e.g., Formspree, Resend, or Web3Forms). This keeps your personal address hidden entirely while giving visitors a seamless way to send a message without leaving your site.

---

### The Verdict

Keep **LinkedIn** as your primary recommended channel, but add an **explicit availability banner** near the bottom of your main pages so visitors know you are open to opportunities, paired with a simple email alias or form for those who prefer email.