import { createTRPCRouter } from './trpc'
import { swordRouter } from './routers/sword'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  sword: swordRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
