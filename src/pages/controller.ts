import { JsonController, Body, Post, HttpCode, Get, Param, Put, NotFoundError } from 'routing-controllers'
//import  { Page } from './data'
import Page from './entity'

@JsonController()
export default class PageController {

    // @Get('/pages/:id')
    // getPage(
    //     @Param('id') id: number
    // ): Page {
    //     return pagesById[id]
    // }

    // @Get('/pages')
    // getPages(): PageList {
    //     return pagesById
    // }
    // //pages: Object.values(oagesByID)//

    // @Put('/pages/:id')
    // updatePage(
    //     @Param('id') id: number,
    //     @Body() body: Partial<Page>
    // ): Page {
    //     console.log(`Incoming PUT body param:`, body)
    //     return pagesById[id]
    // }
    @Get('/pages/:id')
    getPage(
        @Param('id') id: number
    ) {

        return Page.findOne(id)
    }
    @Get('/pages')
    async allPages() {
        const pages = await Page.find()
        return { pages }
    }

    @Put('/pages/:id')
    async updatePage(
        @Param('id') id: number,
        @Body() update: Partial<Page>
    ) {
        const page = await Page.findOne(id)
        if (!page) throw new NotFoundError('Cannot find page')

        return Page.merge(page, update).save()
    }
    

    @Post('/pages')
    @HttpCode(201)
    createPage(
      @Body() page: Page
    ) {
      return page.save()
    }



    // @Post('/pages')
    // @HttpCode(201)
    // createPage(
    //     @Body() body: Page
    // ): Page {
    //     console.log(`Incoming POST body param:`, body)
    //     return body
    // }


}