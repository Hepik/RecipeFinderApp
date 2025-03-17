# Recipe Finder

The frontend for the **Recipe Finder** app, , providing an intuitive and responsive interface for exploring, and view recipe details. Built with **Next.js** and **Tailwind CSS**.

---

## Features

- **Recipe Search**: Search for recipes by name, cuisine, or preparation time.
- **Recipe Details**: View detailed recipe information, including ingredients, preparation time, servings, and a summary.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **User-Friendly Interface**: Simple navigation and layout for an easy-to-use experience.

---

## Requirements

- **Node.js 20+**

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Hepik/RecipeFinderApp.git
cd recipefinderapp
```

### Environment Variables

Copy the default `.env.local` file and update the values as needed:

```bash
cp .env.local .env
```

#### Example `.env.local` file:

```env
NEXT_PUBLIC_API_KEY=your-spoonacular-api-key
```

### Run Locally

To develop locally:

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm run dev
   ```

3. The app will be available at: `http://localhost:3000`.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature`.
5. Open a pull request.

---

## Additional Information

To get an API key, sign up for a free Spoonacular account at [Spoonacular API](https://spoonacular.com/food-api/docs#Authentication)

## Screenshots

![Homepage Screenshot](recipefinderapp\public\image_2025-03-17_17-54-44.png)

![Recipes List](recipefinderapp\public\image_2025-03-17_17-55-17.png)

![Recipe Details Screenshot](recipefinderapp\public\image_2025-03-17_17-55-48.png)
