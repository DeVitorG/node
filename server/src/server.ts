import Fastify from 'fastify'
import cors from '@fastify/cors'
import {PrismaClient} from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

/**
 * Método HTTP: Get(geralmente para trazer informações), Post(insere informações), Put(atualiza informações), Patch(atualizar uma informação específica), Delete(apaga informações).
 */

app.register(cors)

app.get('/habits', async  () => {
    const habits = await prisma.habit.findMany({

    })

    return habits
})

app.listen({
    port: 3333,
}).then(()=>{
    console.log('HTTP Server running!')
})
