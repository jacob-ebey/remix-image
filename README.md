# Remix-Image

## 👋 Intro

- A React component for responsive images in Remix


## 🚀 How to use

### Install

At the moment, this library is only available on GitHub.
To install this library, use on of the following commands:
```bash
npm install -S https://github.com/Josh-McFarlin/remix-image.git
yarn add remix-image@https://github.com/Josh-McFarlin/remix-image.git
```

This library will be uploaded to NPM once a stable release has been created.

### Loader

Create a new resource route that imports the `imageLoader` function and exports as `loader`.
By default, the resource route `"/api/image"` is used, but any route can be used.
```typescript jsx
import { imageLoader } from "remix-image";

export const loader = imageLoader({
  selfUrl: "http://localhost:3000",
  whitelistedDomains: ["i.imgur.com"],
});
```

### Component

Import the `Image` component and specify the url to the resource route used by the `imageLoader` function.
The `loaderUrl` prop is optional if the resource route has been created at the path `"/api/image"`.
```typescript jsx
import { Image } from "remix-image";

<Image
  loaderUrl="/api/image"
  src="..."
  width="..."
  height="..."
  alt="..."
  responsive={[
    {
      size: {
        width: 100,
        height: 100,
      },
      maxWidth: 200,
    },
  ]}
/>
```


## Other

### Status

At the moment this library is experimental and has not been used in a production environment.
Further development is ongoing, but I welcome all pull-requests and issues created on GitHub.

### Credit

This repo expands on the following gists by:

- [jacob-ebey](https://gist.github.com/jacob-ebey/3a37a86307de9ef22f47aae2e593b56f)
- [olikami](https://gist.github.com/olikami/236e3c57ca73d145984ec6c127416340)