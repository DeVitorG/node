import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './lib/routes'

const app = Fastify()

/**
 * Método HTTP: Get(geralmente para trazer informações), Post(insere informações), Put(atualiza informações), Patch(atualizar uma informação específica), Delete(apaga informações).
 */

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333,
}).then(()=>{
    console.log('HTTP Server running!')
})
