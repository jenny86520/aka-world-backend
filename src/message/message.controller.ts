import { Body, Controller, Post } from '@nestjs/common';
import { VerifyService } from 'src/verify/verify.service';
import { AddMessageDto } from './dto/add-message.dto';
import { MessageService } from './message.service';

@Controller('api/message')
export class MessageController {
  constructor(
    private messageService: MessageService,
    private verifyService: VerifyService,
  ) {}

  @Post('add')
  async Add(@Body() req: AddMessageDto) {
    if (!(await this.verifyService.verifyReCaptcha(req.reCaptcha))) {
      return { errorMsg: 'captcha' };
    }
    return this.messageService.add(req);
  }
}
