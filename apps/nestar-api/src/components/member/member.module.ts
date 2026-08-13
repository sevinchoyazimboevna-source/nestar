import { Module } from '@nestjs/common';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';
import { MongooseModule } from '@nestjs/mongoose';
import MemberSchema from 'apps/schemas/Member.model';

@Module({
  imports: [
    MongooseModule.forFeature([{name: "Member", schema: MemberSchema}]) //memberSchema CRUD va database bilan boglik turli hil operatsiyalardi bajarish uchun
  ],
  providers: [MemberResolver, MemberService]
})
export class MemberModule {}
