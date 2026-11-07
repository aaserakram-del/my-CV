// ─────────────────────────────────────────────────────────────
// PROJECTS — the only file you edit to add a new project.
//
// To add a project: copy one object, paste it at the top of the array,
// and change the values. It appears on the site automatically.
//
// Fields:
//   title         string   Project name
//   description   string   1–2 sentences about what it does
//   image         string   Path inside /public (e.g. '/projects/vyro.png').
//                          Leave '' to use the placeholder.
//   technologies  string[] Shown as tags on the card
//   githubLink    string   Repo URL. Leave '' to hide the button.
//   liveDemo      string   Deployed URL. Leave '' to hide the button.
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    title: 'VYRO E-Commerce Website',
    description:
      'A modern clothing e-commerce website built with React and Tailwind CSS. Includes product listing, product details, cart functionality, routing, and API integration.',
    image: '/projects/vyro.png',
    technologies: [
      'React',
      'Tailwind CSS',
      'Axios',
      'React Router',
      'AOS'
    ],
    githubLink: '',
    liveDemo: 'https://e-commerce-self-nu-94.vercel.app/',
  },
]