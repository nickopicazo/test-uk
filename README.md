# FOCAL BOILERPLATE

Prerequisites
Before you begin, ensure you have the following installed:

- Update [STORE-NAME] with your working store
- Node.js (v14.17.0 or later)
- PNPM
- Shopify CLI

# Install Dependencies
Install all the necessary dependencies using PNPM:
```bash
pnpm install
```
# Development Build
To compile the project for development, run:
```bash
pnpm run build:dev
```

# Watch for Changes
If you want Webpack to watch for changes and automatically recompile, use:
```bash
pnpm run build:watch
```

# Start the Shopify Theme
To logout to the previous store and start the Shopify theme and begin development:
```bash
pnpm run theme:start
```
But if you are already logged in to the Shopify store you can use:
```bash
pnpm run theme:dev
```

# Handling Compiled Assets

## Overview
In our project, we've chosen to exclude compiled assets, specifically `bundle.js` and `custom.css`, from our Git repository. This decision helps us avoid merge conflicts, reduce the repository size, and keep our focus on source code rather than derived artifacts.

## Compiled Assets in `.gitignore`
The compiled files `bundle.js` and `custom.css` are included in our `.gitignore` file. This means that these files, although essential for the running of our application, are not tracked by Git when developers make local changes or compile the assets.

## CI/CD Pipeline
Our Continuous Integration/Continuous Deployment (CI/CD) pipeline, set up through GitHub Actions, handles the compilation of these assets. Upon every push to the `main` branch, the CI/CD pipeline runs a build process that compiles the latest versions of `bundle.js` and `custom.css`.

### Automated Committing of Compiled Assets
Even though these files are listed in `.gitignore`, our CI/CD pipeline is configured to forcibly add and commit any changes to these files back to the repository. This step ensures that the deployed version of our application always includes the most up-to-date compiled assets.

Here's a snippet from our CI/CD configuration demonstrating this process:

```yaml
- name: Commit and push compiled assets
  run: |
    git config --global user.email "bot@drive.digital"
    git config --global user.name "CI Bot"
    git add -f assets/bundle.js assets/custom.css
    git commit -m "Update compiled assets" || echo "No changes to commit"
    git push origin main || echo "No changes to push"
```

## For Developers
Developers working on this project should be aware that they do not need to manually track or commit changes to bundle.js and custom.css.
The CI/CD pipeline takes care of generating and updating these files in the repository.
