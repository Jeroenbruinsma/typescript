import { JsonController, Body, Post, HttpCode, Get, Param, Put, NotFoundError } from 'routing-controllers'
import Page from './entity'

@JsonController()
export default class UserController {

 
    @Get('/users/:id')
    getPage(
        @Param('id') id: number
    ) {

        return Page.findOne(id)
    }
    @Get('/users')
    async allPages() {
        const pages = await Page.find()
        return { pages }
    }

    @Put('/users/:id')
    async updatePage(
        @Param('id') id: number,
        @Body() update: Partial<Page>
    ) {
        const page = await Page.findOne(id)
        if (!page) throw new NotFoundError('Cannot find page')

        return Page.merge(page, update).save()
    }
    

    @Post('/users')
    @HttpCode(201)
    createPage(
      @Body() page: Page
    ) {
      return page.save()
    }



}