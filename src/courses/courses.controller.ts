import {
    Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get()
  findAll(@Res() response) {
    return response.status(200).json({ message: 'Listagem de cursos' });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso com id ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log(body);
    return `Atualizou curso com id ${id}`;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return `Deletou curso com id ${id}`;
  }
}
