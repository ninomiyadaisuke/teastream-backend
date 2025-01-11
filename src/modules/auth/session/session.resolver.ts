import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { SessionService } from './session.service';
import {
  GqlContext
} from '@/src/shared/types/gql-context.types';
import { LoginInput } from './inputs/login.input';
import { UserAgent } from '@/src/shared/decorators/user-agent.decorator';
import { Authorization } from '@/src/shared/decorators/auth.decorator';
import { SessionModel } from './models/session.model';
import { AuthModel } from '../account/models/auth.model';

@Resolver('Session')
export class SessionResolver {
  constructor(private readonly sessionService: SessionService) { }


  @Authorization()
  @Query(() => [SessionModel], { name: 'findSessionsByUser' })
  public async findByUser(@Context() { req }: GqlContext) {
    return this.sessionService.findByUser(req)
  }


  @Authorization()
  @Query(() => SessionModel, { name: 'findCurrentSession' })
  public async findCurrent(@Context() { req }: GqlContext) {
    return this.sessionService.findCurrent(req)
  }

  @Mutation(() => AuthModel, { name: 'loginUser' })
  public async login(
    @Context() { req }: GqlContext,
    @Args('data') input: LoginInput,
    @UserAgent() userAgent: string
  ) {
    return this.sessionService.login(req, input, userAgent);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'logoutUser' })
  public async logout(@Context() { req }: GqlContext) {
    return this.sessionService.logout(req)
  }

  @Mutation(() => Boolean, { name: 'clearSessionCookie' })
  public async clearSession(@Context() { req }: GqlContext) {
    return this.sessionService.clearSession(req)
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'removeSession' })
  public async remove(
    @Context() { req }: GqlContext,
    @Args('id') id: string
  ) {
    return this.sessionService.remove(req, id)
  }
}
