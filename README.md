# About

- This is a [`Next.js`](https://nextjs.org/) template bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [`Auth.js`](https://authjs.dev)

## Usage

```bash

bunx create-next-app --example https://github.com/Bethel-nz/auth-v5 track-my-subs

#or

yarn create-next-app --example https://github.com/Bethel-nz/auth-v5 track-my-subs

#or

npx create-next-app@latest --example https://github.com/Bethel-nz/auth-v5 track-my-subs

#or

pnpm create-next-app --example https://github.com/Bethel-nz/auth-v5 track-my-subs
```

<br/>

## Getting Started

- By default this template uses prisma adapter
  - remember to set your `DATABASE_URL` in the env file
- make a `.env` file or `.env.local` file
- add your necessary client keys and id or your providers accessing keys and values
- prefix them with `Auth_` and then the id

```
AUTH_EXAMPLE_PROVIDER_ID = value goes here
AUTH_EXAMPLE_PROVIDER_SECRET = value goes here
```

- check if auth.js supports your provider - [Auth.js providers](https://authjs.dev/getting-started/providers)
- add your provider to the `auth.config.ts` file in config dir
- next auth v5 will pick up provider secret and id
- don't forget to generate your secret and add it to the `.env` files
- cross reference the `.env.example` file - [here](./.env.example)

  <br/>

## Run the development server:

```bash

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about this template, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Auth.js Documentation](https://authjs.dev/)

You can check out [the Auth-v5 GitHub repository](https://github.com/Bethel-nz/auth-v5) - your feedback and contributions are welcome!

## Stack

~ This project uses:

- [Next.js](https://nextjs.org/docs)
- [Auth.js](https://authjs.dev)
- [Prisma](https://prisma.io/docs/getting-started)
- [Shadcn-ui](https://ui.shadcn.com)
