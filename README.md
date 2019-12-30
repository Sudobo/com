# Description
All sudobo's components in this package.


# Development
### Clone github
HTTPS
```
git clone https://github.com/Sudobo/com.git
```
Or SSH
```
git@github.com:Sudobo/com.git
```

### Create component
A new component will create at `src/components` folder.
To export component, we will define it in `src/index.js` file.

### Compiles and hot-reloads for development
```
npm run dev
```

### Build library
This action will create `dist` folder in this package. When a project install this package, it will use `dist` folder.

```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# Add package to project
### On local
```
npm add [Package path]
```
Example:
- Project source: `~/project/sudobo-website`
- Package source: `~/project/com`
- Step 1: Go to project source: cd `~/project/sudobo-website`
- Step 2: Install package: `npm add ../com`

### On github
HTTPS:
```
npm install --save git+https://git@github.com/Sudobo/com
```
Or SSH
```
npm install --save git+ssh://git@github.com/Sudobo/com
```

### On NPM
Updating...
