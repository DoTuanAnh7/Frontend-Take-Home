import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  postcode: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  country: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
