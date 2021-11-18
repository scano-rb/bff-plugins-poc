import { NestFactory } from '@nestjs/core'
import { PluginsModule } from './plugins/plugins.module'

async function bootstrap() {
  const app = await NestFactory.create(PluginsModule)
  await app.listen(3000)
}
bootstrap()
