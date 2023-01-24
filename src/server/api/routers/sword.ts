import { z } from 'zod'

import fetcher from '@/lib/fetcher'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'

interface SwordData {
  comment: string
  dailyText: string
  date: string
  scripture: string
  success: boolean
  text: string
}

export const swordRouter = createTRPCRouter({
  dt: publicProcedure
    .input(z.object({ date: z.string() }))
    .query(async ({ input }) => {
      const data: SwordData = await fetcher(
        `https://notes.dlopez.app/api/sword/dt/${input.date}`
      )
      return data
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany()
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!'
  }),
})
