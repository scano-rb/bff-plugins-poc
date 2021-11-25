import { Inject, Injectable, OnModuleInit } from "@nestjs/common"
import { ClientGrpc } from "@nestjs/microservices"

@Injectable()
export class PluginsService implements OnModuleInit {

    private pluginGrpcClient: PluginService

    constructor(@Inject('PLUGIN_PACKAGE') private client: ClientGrpc) { }

    onModuleInit() {
        this.pluginGrpcClient = this.client.getService<PluginService>('PluginService')
    }

    async getAll() { }

    async download(id: number) { }

    async installPlugin(id: number) { }

    async uninstallPlugin(id: number) { }
}