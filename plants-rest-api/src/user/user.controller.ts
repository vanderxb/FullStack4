import { Controller, Post, Body } from '@nestjs/common'

@Controller('user')
export class UserController {
    @Post('create')
    createUser(@Body() data){
        return data;
    }
}
