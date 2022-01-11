import { Body, Controller, Post } from '@nestjs/common';
import { AddMessageDto } from './dto/add-message.dto';
import { MessageService } from './message.service';

@Controller('api/message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post('add')
  Add(@Body() req: AddMessageDto) {
    return this.messageService.add(req);
  }
}
