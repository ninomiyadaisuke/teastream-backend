import { PrismaService } from '@/src/core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { MailService } from '../libs/mail/mail.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly mailService: MailService
  ) { }

  // 秒  分  時  日  月  曜日
  // *   *   *   *   *   *
  // @Cron("*/10 * * * * *")
  @Cron("0 0 * * *")
  public async deleteDeactivatedAccounts() {
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const desctivatedAccounts = await this.prismaService.user.findMany({
      where: {
        isDeactivated: true,
        deactivatedAt: {
          lte: sevenDaysAgo
        }
      }
    })

    for( const user of desctivatedAccounts) {
      await this.mailService.sendAccountDeletion(user.email)
    }

    await this.prismaService.user.deleteMany({
      where:{
        isDeactivated: true,
        deactivatedAt: {
          lte: sevenDaysAgo
        }
      }
    })
  }
}
