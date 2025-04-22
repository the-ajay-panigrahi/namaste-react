# Namaste React

## Episode - 01 | Inception

### Q1: What is Emmet?

**A:**  Emmet is a shortcut tool in code editors.  
It helps you write HTML and CSS faster with short code.

Example: `ul>li*3` becomes:
```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```
### Q2: What is a CDN and why do we use it? Are there other ways?

**A:**  CDN stands for **Content Delivery Network**.  
It helps load website files like CSS, JS, and images from servers closer to the user, making the site faster.

**Why we use it:**  
- Faster loading speed  
- Less load on your server  
- Better performance for users everywhere

**Other ways:**  
You can also host files on your own server or use cloud services like AWS or Google Cloud.

**What types of files can we serve from a CDN?**  
You can serve many types of static files, such as:
- Images (JPG, PNG, SVG, WebP)
- Videos (MP4, WebM)
- CSS files
- JavaScript files
- Fonts (WOFF, TTF)
- PDF or other documents
- JSON files (e.g. for APIs)
- HTML (in some cases)

**How does a CDN work internally? (Simple steps):**
1. You upload your file (like an image or CSS) to your server or cloud storage.
2. CDN copies that file to many servers around the world (called edge servers).
3. When someone opens your website, CDN finds the closest server to the user.
4. That nearby server sends the file quickly.
5. If the file isn’t there yet, it gets it from your main server, stores it, and then sends it.

**In short:**  
CDN delivers files from the nearest location, just like a delivery app sends food from the closest kitchen!

### Q3: What is the `crossorigin` attribute in a JavaScript `<script>` tag?

**A:**  The `crossorigin` attribute is used when we load JavaScript files from another website (like a CDN).

It tells the browser **how to handle the file** if it's from a different website.

**Why it's used:**
- For security reasons  
- To check if the file is safe (using something called SRI)  
- To control whether cookies or login info should be sent or not

**Values:**
1. `anonymous` – Do not send any user info (like cookies)  
2. `use-credentials` – Send user info (if needed)

**Note:**  
If you don’t write `crossorigin`, the browser acts like it's set to `anonymous` by default.

**Example:**
```html
<script src="https://cdn.example.com/app.js" crossorigin="anonymous"></script>
```

**Is CORS and `crossorigin` the same?**

***No — they are not the same, but they are related.***

- **CORS (Cross-Origin Resource Sharing):** A **security rule handled by the server**. It decides who is allowed to access resources from another origin (like an API or file).

- **`crossorigin` attribute:** A **browser setting** that tells how the browser should send the request — with or without user credentials.

**In short:**  
`crossorigin` gives instructions from the browser side.  
CORS gives rules from the server side.  
They work together to handle safe loading of files from other websites.

### Q4: Is React a library? What’s the difference between a library and a framework?

**A:**  
Yes, **React is a JavaScript library**, not a framework.

It is mainly used to **build user interfaces (UI)**, especially for **single-page applications**.  
React only handles the **view layer** of your app — how things look and interact.

---

### 📚 Library vs. Framework

| Feature            | Library                        | Framework                           |
|--------------------|----------------------------------|-------------------------------------|
| Control            | You control the flow            | Framework controls the flow         |
| Flexibility        | More flexible                   | More structured                     |
| Use case           | You pick and use what you need  | Comes with rules and setup          |
| Example            | React, Lodash, jQuery           | Angular, Vue (in full), Django      |

---

**Think of it like this:**

- A **library** is like ordering ingredients from a menu — you cook the way you like.
- A **framework** is like a recipe box — it tells you what to do step by step.

**In short:**  
React gives **freedom and flexibility**, but **you manage how things connect**.  
Frameworks give you a **ready-made structure**, but with **less freedom**.

### Q5: What are the advantages of React?

**A:**

React has many benefits that make it popular for building user interfaces:

1. **Component-Based**  
   You can break your UI into small reusable pieces called components.

2. **Fast Rendering with Virtual DOM**  
   React updates only the part of the page that changed, making it faster.

3. **Reusable Code**  
   You can reuse components across pages and projects.

4. **Unidirectional Data Flow**  
   Data flows in one direction, making the code easier to debug and manage.

5. **Large Community and Ecosystem**  
   Lots of support, libraries, tools, and tutorials available.

6. **Strong Support for JSX**  
   JSX lets you write HTML inside JavaScript, which makes code more readable and easy to manage.

7. **Great Developer Tools**  
   Tools like React DevTools help you inspect and debug React code easily.

---

**In short:**  
React makes UI development **faster**, **cleaner**, and **more reusable**, with strong community support and great tools.

## Episode-02 | Igniting our App

### Q1: What is npm?

**A:**  npm **does not officially stand for** "Node Package Manager", though it is often referred to that way.  
It is the default package manager for Node.js and is used to install, manage, and share JavaScript packages.  
npm also provides access to the **npm registry**, a large collection of open-source packages for JavaScript development.

### Q2: What is package.json?

**A:**  `package.json` is a configuration file used by **npm** to manage a Node.js project.  
It contains metadata about the project, including its name, version, scripts, and dependencies.  
There are two main types of dependencies that can be listed in `package.json`:  
- **Dependencies**: Required for the project to run.  
- **DevDependencies**: Only needed during development (e.g., testing, bundling tools).

### Q3: What is a bundler?

**A:**  A **bundler** is a tool that collects and combines all your project files (JS, CSS, images)  
into a smaller number of optimized files for production.  
It helps your app run faster and load better in the browser.

**Steps a bundler usually performs:**
1. Reads your project files.
2. Resolves all imports and dependencies.
3. Transforms the code (like using Babel).
4. Combines everything into one or few files.
5. Optimizes the output (minify, compress, etc.).

**Examples:** Webpack, Parcel, Vite

### Q4: What is a semversion?

**A:** **SemVer** (short for *Semantic Versioning*) is a standard way to version software using three numbers:

**What they mean:**
- **MAJOR** – Breaking changes (not backward compatible)
- **MINOR** – New features (backward compatible)
- **PATCH** – Bug fixes (backward compatible)

**Example:** `2.5.3` means:
- Major version: 2
- Minor update: 5
- Patch fix: 3

---

### Special symbols in versioning:

- `^` (Caret): Updates to latest **minor** and **patch**  
  → `^1.2.3` means: `>=1.2.3` and `<2.0.0`

- `~` (Tilde): Updates to latest **patch** only  
  → `~1.2.3` means: `>=1.2.3` and `<1.3.0`

- No symbol: Install **only the exact version**  
  → `1.2.3` means: **only** version `1.2.3`

This helps maintain app stability while keeping dependencies up to date.

### Q5: What is package-lock.json?

**A:**  `package-lock.json` is a file automatically generated when you run `npm install`.  
It locks the versions of your project dependencies to ensure that everyone working on the project has the **same version** of dependencies, making the build process more predictable.

**Key points:**
- It records the exact versions of each installed package.
- Helps in faster, consistent installs by using the locked versions.
- Ensures that updates to dependencies are intentional and controlled.

**Example:** If `package.json` lists `"lodash": "^4.17.21"`, the `package-lock.json` will specify the exact version installed, like `"lodash": "4.17.21"`.
 
### Q6: What is node_modules?

**A:**  `node_modules` is a folder that contains all the installed **dependencies** (libraries and packages) for a Node.js project.  
When you run `npm install`, all the packages listed in `package.json` are downloaded and stored in the `node_modules` directory.

**Key points:**
- It holds both your project's direct dependencies and their dependencies (transitive dependencies).
- It can grow large because it includes all the required packages for your project to run.

**Example:** If you install `lodash`, it will appear in `node_modules` as a folder named `lodash` with all its files.

### Q7: What is transitive dependencies?

**A:**  **Transitive dependencies** are the dependencies of your project's direct dependencies.  
In other words, if your project uses package A, and package A depends on package B, then package B is a **transitive dependency** of your project.

### Q8: What is Git, GitHub, and their difference?

**A:**  **Git** is a **version control system** that helps you track changes in your code and collaborate with others.

 **GitHub** is a **cloud platform** to host Git repositories online and collaborate with others using Git.

**Key Difference:**
- **Git** is a tool used **locally** on your machine.
- **GitHub** is a **remote service** where Git repositories are stored and shared.

**Example to understand better:**

- Think of **Git** as **Microsoft Word** — you can write, edit, and track versions of your document **on your computer**.
- Think of **GitHub** as **Google Drive** — you upload your document **online** to **store, share, and collaborate** with others.

So, Git helps you manage your code, and GitHub helps you store and share it with others.