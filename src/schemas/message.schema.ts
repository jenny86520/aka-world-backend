import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  email: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
