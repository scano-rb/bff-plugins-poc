import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { join } from 'path'
import { PluginsController } from './plugins.controller'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PLUGIN_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'plugin',
          protoPath: join(__dirname, '../proto/plugin.proto')
        }
      }
    ])
  ],
  controllers: [PluginsController]
})
export class PluginsModule { }
