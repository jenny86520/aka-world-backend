import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from 'src/schemas/message.schema';
import { AddMessageDto } from './dto/add-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async add(message: AddMessageDto): Promise<Message> {
    const addMessage = new this.messageModel(message);
    return addMessage.save();
  }
}
