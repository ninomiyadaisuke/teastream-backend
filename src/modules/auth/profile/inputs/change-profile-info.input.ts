import { Field, InputType } from '@nestjs/graphql'
import {
	IsNotEmpty,
	IsOptional,
	IsString,
	Matches,
	MaxLength
} from 'class-validator'


@InputType()
export class ChangeProfileInfoInput {
    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    @Matches(/^[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}a-zA-Z0-9]+(?:-[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}a-zA-Z0-9]+)*$/u)
    public username: string

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    public displayName: string

    @Field(() => String)
    @IsString()
    @IsOptional()
    @MaxLength(300)
    public bio?: string
}