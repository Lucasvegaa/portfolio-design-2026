# portfolio-design-2026

Portfolio profesional de diseño gráfico para [Nombre de su hermana]. Desarrollado con Astro, React y Tailwind CSS.

## 🚀 Project Structure

```
/
├── public/
│   └── images/          # Image assets folder
├── src/
│   ├── components/      # React/Astro components
│   │   └── Counter.tsx  # Example React component
│   ├── data/           # Data files
│   │   └── projects.json # Projects data
│   ├── layouts/        # Layout components
│   │   └── Layout.astro
│   └── pages/          # Pages (file-based routing)
│       └── index.astro
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── package.json
```

## 🧰 Tech Stack

- **Astro v5.17.1** - The web framework for content-driven websites
- **React v19** - UI components
- **Tailwind CSS v3.4** - Utility-first CSS framework
- **TypeScript** - Type safety and better DX

## 🛠️ Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Data Structure

The `src/data/projects.json` file contains project data in the following structure:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Example Project",
      "description": "This is an example project",
      "image": "/images/example.jpg",
      "technologies": ["Design", "Branding"]
    }
  ]
}
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration can be found in `tailwind.config.mjs`.

## 📦 React Components

React components can be added to the `src/components/` directory. They can be imported and used in Astro pages with client directives:

```astro
---
import Counter from '../components/Counter.tsx';
---

<Counter client:load />
```

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
