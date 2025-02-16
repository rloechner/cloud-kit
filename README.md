# CloudKit (Beta)

CloudKit is an open-source, cloud-first toolkit designed to help you quickly launch simple, customizable websites. *(Currently in beta—expect rapid iterations and improvements!)* Built with Next.js, GitHub Codespaces, and deployed on Vercel, this project is ideal for non-profits, small businesses, freelancers, and creative professionals who need an easy and maintainable web solution.

## Features

- **Cloud-Based Development:** Work entirely in the cloud using GitHub Codespaces—no local setup required.
- **Modern Stack:** Powered by Next.js for a component-driven, scalable web framework.
- **Seamless Deployment:** Automatically deploy your site with Vercel, leveraging continuous integration with GitHub.
- **Template-Ready:** Designed to be extended with customizable themes and templates, making it easy to adapt for various use cases.

## Tech Stack

- **Next.js:** A modern React framework for building fast and dynamic web applications.
- **GitHub Codespaces:** A cloud development environment that lets you code anywhere.
- **Vercel:** A deployment platform optimized for Next.js, providing seamless cloud hosting.

## Getting Started

### Using GitHub Codespaces

1. **Create a Repository:**  
   Create a new repository on GitHub and push this project code to it.

2. **Set Up Your Dev Container:**  
   Create a `.devcontainer` directory with a `devcontainer.json` file to define your Codespace environment. For example:

   ```json
   {
     "name": "Next.js Dev Container",
     "image": "node:18",
     "settings": {
       "terminal.integrated.shell.linux": "/bin/bash"
     },
     "postCreateCommand": "npm install",
     "forwardPorts": [3000],
     "extensions": ["dbaeumer.vscode-eslint"]
   }

3.	**Launch Codespaces:**
    Open your repository on GitHub and click the **Code** button, then select **Open with Codespaces**. Your development environment will spin up in the cloud.

4.	**Scaffold/Update Your Project:**
    If you haven’t already set up a Next.js project, run the following in your Codespace terminal:
  	```sh
    npx create-next-app@latest .
    ```
   
5.	**Run the Development Server:**
    Start your project with:
    ```sh
    npm run dev
    ```
   
Visit http://localhost:3000 (or use the forwarded port link provided by Codespaces) to see your site in action.

## Deploying with Vercel
1.	**Connect to Vercel:**
    Log in or sign up at [Vercel](https://vercel.com) using your GitHub account.
  	
3.	**Import Your Repository:**
    In Vercel, click **New Project**, select your CloudKit repository, and let Vercel automatically detect it as a Next.js project.
  	
4.	**Deploy:**
    Click **Deploy**. Vercel will build your project and provide you with a live URL (e.g., https://cloud-kit.vercel.app). Every push to GitHub will trigger an automatic update.

# Contributing

Contributions are welcome! If you’d like to improve CloudKit, please:

1.	Fork the repository.
2.	Create a new branch for your feature or bug fix.
3.	Submit a pull request with a clear description of your changes.

Feel free to open issues for suggestions, improvements, or bug reports.

# License

This project is licensed under the [MIT License](https://mit-license.org).

# About

CloudKit aims to provide a simple, maintainable web solution that anyone can use to create a professional online presence without the hassle of complex setups. Whether you’re a non-profit, a personal trainer, a chef, or a guitar player, this toolkit is designed to be flexible and easy to extend.

This entire project is being built using **ChatGPT prompts**—curated, tested, and implemented by me! The goal is to see if we can create a fully cloud-based, easy-to-replicate website starter kit that anyone can fork and use.  

Think of it as an AI-assisted web development experiment. If you're reading this and trying to follow along, welcome to the journey! 🚀  

**Happy coding!**
