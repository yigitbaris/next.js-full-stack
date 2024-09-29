import { getCurrentUser } from '@/app/actions/getCurrentUser'
import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const currentUser = await getCurrentUser()
  const body = await request.json()
  const { name, email, password } = body

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  })

  return NextResponse.json(user)
}
