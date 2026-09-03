import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { FollowResolver } from './follow.resolver';
import { MemberModule } from '../member/member.module';
import { FollowService } from './follow.service';
import FollowSchema from '../../libs/schemas/Follow.model';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Follow', schema: FollowSchema }]), AuthModule, MemberModule],
	providers: [FollowResolver, FollowService],
	exports: [FollowService],
})
export class FollowModule {}
