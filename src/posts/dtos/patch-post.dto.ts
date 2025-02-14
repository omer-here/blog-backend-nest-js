import { CreatePostDto } from './create-post.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class PatchPostDto extends PartialType(CreatePostDto) {  //the PatchPostDto has all the properties of CreatePostDto but as optional
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    id: number;
}