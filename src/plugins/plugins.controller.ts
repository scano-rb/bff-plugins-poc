import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { PluginsService } from './plugins.service'

@Controller()
export class PluginsController {

    constructor(private pluginsService: PluginsService) { }

    @Get('/plugins')
    getAll() {
        return this.pluginsService.getAll()
    }

    @Get('/plugins/download/:id')
    download(@Param('id') id: number) {
        return this.pluginsService.download(id)
    }

    @Post('/sites/plugins')
    installPlugin(@Body() id: number) {
        return this.pluginsService.installPlugin(id)
    }

    @Delete('/sites/plugins/:id')
    uninstallPlugin(@Param('id') id: number) {
        return this.pluginsService.uninstallPlugin(id)
    }
}
