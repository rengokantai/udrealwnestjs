import { Controller, Get } from "@nestjs/common";
import { TagService } from "./tag.service";

@Controller('tags')
export class TagController{
    constructor(private readonly ts:TagService){

    }
    @Get() 
    async findAll(){
        const tags = await this.ts.findAll();
        return {
            tags: tags.map((t) => t.name)
        }
    }
}