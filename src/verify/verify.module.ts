import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { VerifyService } from './verify.service';

@Module({
  imports: [HttpModule],
  providers: [VerifyService],
  exports: [VerifyService],
})
export class VerifyModule {}
