# Naga Tejasri — Student Portfolio

A clean, responsive, recruiter-friendly student portfolio for **Naga Tejasri**, a student building Full-Stack applications, AI/ML models, RAG systems, and AI Agents.

---

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Dark `#050505` visual theme, Electric Blue `#3B82F6` accents)
- **Animations**: Framer Motion (Restrained card fade/rise animations)
- **Smooth Scroll**: Lenis (`@lenis/react` / `lenis`)
- **Icons**: React Icons (Simple Icons `si`, FontAwesome `fa6`) & Lucide React
- **Brand Icons Utility**: [`lib/techIcons.ts`](file:///c:/Users/tejas/Downloads/Protofolio/lib/techIcons.ts)
- **Favicon**: Static PNG Icon Generator (`app/icon.tsx`)

---

## 📂 Project Structure & Section Hierarchy

- **Hero**: Student label (`STUDENT · FULL-STACK & AI/ML`), Main Headline (`NAGA TEJASRI.`), one-line statement (`I build AI-powered full-stack projects.`), supporting text, availability pill, primary buttons (`DOWNLOAD RESUME`, `VIEW PROJECTS`, `CONTACT ME`), social links.
- **Technology Marquee**: ~150–190px tiles with official brand logos and technology names.
- **01 / EXPERTISE**: Technical Skills categorized into *Languages & Core CS [CORE]*, *GenAI & Agentic AI [AI SYSTEMS]*, *Web Development [FULL-STACK]*, and *Databases, Tools & Deployment [TOOLS]*.
- **02 / SELECTED WORK**: Selected projects (CORE9, Inventra, LuxeSpace Interiors, CrewAI Game, Job Search RAG, Event Feedback Analyzer).
- **03 / ABOUT**: First-person student bio, scroll-driven interactive timeline, Novice Badge · GRIT chip, and Download Resume button.
- **04 / GET IN TOUCH**: Minimal centered contact section with mail icon, gradient heading `LET'S BUILD SOMETHING GREAT.`, Gmail compose / mailto email button, copy email action, and social links.

---

## 📄 Adding Your Resume PDF

1. Create a directory named `resume` inside the `public/` directory if it does not already exist:
   ```
   public/
   └── resume/
       └── Naga_Tejasri_Resume.pdf
   ```
2. Place your resume file named **`Naga_Tejasri_Resume.pdf`** into `public/resume/`.
3. All resume buttons across the site link directly to `/resume/Naga_Tejasri_Resume.pdf`.

---

## ✏️ Customizing Portfolio Data

All text, project details, college info, and social links are centralized in `data/site.ts`, `data/about.ts`, and `data/projects.ts`:

- **`data/site.ts`**: Update student details, email, GitHub URL, LinkedIn URL, and education fields.
- **`data/about.ts`**: Update timeline entries, degree details, hackathon descriptions, and dates.
- **`data/projects.ts`**: Update GitHub URLs and live demo links for all projects.

---

## 🛠️ Local Development & Build Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Production Build & Check Validity
```bash
npm run build
```

---

## 🌐 Deployment Instructions (Vercel)

1. Push your repository to GitHub / GitLab.
2. Log into [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your repository.
4. Framework preset: **Next.js**
5. Build command: `npm run build`
6. Click **Deploy**.
