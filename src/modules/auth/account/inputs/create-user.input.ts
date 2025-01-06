import { Field, InputType } from "@nestjs/graphql"
import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MinLength,
  IsString,
} from "class-validator"

@InputType()
export class CreateUserInput {
	@Field(() => String)
  @IsString()
  @IsNotEmpty()
  @Matches(/^[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}a-zA-Z0-9]+(?:-[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}a-zA-Z0-9]+)*$/u)
  public username: string

  @Field(() => String)
	@IsString()
	@IsNotEmpty()
	@IsEmail()
	public email: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	@MinLength(8)
	public password: string
}