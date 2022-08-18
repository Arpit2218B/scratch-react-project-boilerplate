```
src
│   assets (includes svgs, images, logos, fonts etc)
│   |     index.tsx
│   components (shared, named exports, container-view)
│   |     index.tsx
│   config (includes all master level configs)
│   navigation
│   │     CONSTANTS.tsx
│   │     NotFound.tsx
│   │     PrivateRoute.tsx
│   │     RouterConfig.tsx
│   hooks
│   │     useAuth.tsx
│   pages
│   └───  pagename
│          │  index.tsx
│          │  styles.scss
│          └───  components
│   reudx
│   │     CONSTANTS.tsx
│   │     store.tsx
│   └───  reducers
│   └───  actions
│   └───  sagas
│   services
│   │     CONSTANTS.tsx
│   │     {______}Service.tsx
│   │     index.tsx
│   styles
│   │     global.scss
│   └───  common
│   └───  pages
│   utils
│   #  (includes all utility and helper methods)
│   tests
│   │     global.test.tsx
│   └───  common
│   └───  pages
└── index.tsx
│
└── App.tsx
│
└── App.scss
│
└── jsconfig.json
```

GITHUB REPO - 
    
    https://gitlab.com/saurabhshah231/reactjs-myapp/-/tree/master/src

BLOG LINK -

    https://medium.com/geekculture/react-js-architecture-features-folder-structure-design-pattern-70b7b9103f22#e244

jsconfig.json -

    {
        "compilerOptions": {
            "baseUrl": "src"
        },
    "include": ["src"]
    }