import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './Auth/auth.controller';
import { AuthService } from './Auth/auth.service';
import { User, UserSchema } from './User/user.model';
import { UserService } from './User/user.service';
import { UserModule } from './User/user.module';
import { ProductModule } from './Product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dtanh7:tuananh127@cluster0.h7d1syt.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h' },
    }),
    UserModule,
    ProductModule
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AppModule {}
