import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create test users
  const hashedPassword = await bcrypt.hash('password123', 12)

  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      name: 'Demo User',
      password: hashedPassword,
      subscriptionTier: 'FREE',
      subscriptionStatus: 'INACTIVE',
    },
  })

  const proUser = await prisma.user.upsert({
    where: { email: 'pro@example.com' },
    update: {},
    create: {
      email: 'pro@example.com',
      name: 'Pro User',
      password: hashedPassword,
      subscriptionTier: 'PRO',
      subscriptionStatus: 'ACTIVE',
    },
  })

  const maxUser = await prisma.user.upsert({
    where: { email: 'max@example.com' },
    update: {},
    create: {
      email: 'max@example.com',
      name: 'Max User',
      password: hashedPassword,
      subscriptionTier: 'MAX',
      subscriptionStatus: 'ACTIVE',
    },
  })

  console.log('✅ Created users:')
  console.log('- Demo User (FREE):', demoUser.email)
  console.log('- Pro User (PRO):', proUser.email)
  console.log('- Max User (MAX):', maxUser.email)
  console.log('Password for all: password123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })