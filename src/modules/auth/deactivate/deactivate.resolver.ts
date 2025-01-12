import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { DeactivateService } from './deactivate.service';
import { Authorization } from '@/src/shared/decorators/auth.decorator';
import { AuthModel } from '../account/models/auth.model';
import { GqlContext } from '@/src/shared/types/gql-context.types';
import { User } from '@/prisma/generated';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { UserAgent } from '@/src/shared/decorators/user-agent.decorator';
import { DeactivateAccountInput } from './inputs/deactivate-account.input';

@Resolver('Deactivate')
export class DeactivateResolver {
  constructor(private readonly deactivateService: DeactivateService) { }

  @Authorization()
  @Mutation(() => AuthModel, { name: 'deactivateAccount' })
  public async deactivateAccount(
    @Context() { req }: GqlContext,
    @Args('data') input: DeactivateAccountInput,
    @Authorized() user: User,
    @UserAgent() userAgent: string
  ) {
    return this.deactivateService.deactive(req, input, user, userAgent);
  }
}
