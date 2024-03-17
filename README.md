# React Roadmap

This is an open source learning management system build everything in Next.js 14. It is bootstrapped with `create-t3-app`

![cover-image](https://lms-project-flax.vercel.app/cover.png)

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **User Management**: NextAuth
- **ORM**: Prisma
- **UI Components**: NextUI
- **File Uploads**: uploadthing

## Running Locally

1. Clone the repository.
```
git clone https://github.com/AFPedreros/lms-project.git
```
2. Install dependencies using pnpm.
```
pnpm install
```
3. Copy the `.env.example` to `.env` and update the variables.
```
cp .env.example .env
```
4. Start the development server.
```
pnpm run dev
```
5. Push the database schema.
```
pnpm run db:push
```

## License
Licensed under the MIT License. Check the [LICENSE](https://github.com/AFPedreros/lms-project/blob/main/LICENSE.md) file for details.