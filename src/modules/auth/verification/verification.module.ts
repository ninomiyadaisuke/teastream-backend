import { Module } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { VerificationResolver } from './verification.resolver';
import { MailService } from '../../libs/mail/mail.service';

@Module({
  providers: [VerificationResolver, VerificationService],
})
export class VerificationModule { }
