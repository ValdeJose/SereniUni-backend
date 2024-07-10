import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizDetailsModule } from './modules/quiz_details/quiz_details.module';
import { QuizzesModule } from './modules/quizzes/quizzes.module';
import { UserDetailModule } from './modules/user_detail/user_detail.module';
import { UserAminDetailModule } from './modules/user-amin_detail/user-amin_detail.module';
import { UsersModule } from './modules/users/users.module';
import { UsersAdminModule } from './modules/users-admin/users-admin.module';
import { QuizDetail } from './modules/quiz_details/entities/quiz_detail.entity';
import { UserDetail } from './modules/user_detail/entities/user_detail.entity';
import { Quiz } from './modules/quizzes/entities/quiz.entity';
import { UserAminDetail } from './modules/user-amin_detail/entities/user-amin_detail.entity';
import { UsersAdmin } from './modules/users-admin/entities/users-admin.entity';
import { User } from './modules/users/entities/user.entity';
import { QuizTypeModule } from './modules/quiz_type/quiz_type.module';
import { QuizType } from './modules/quiz_type/entities/quiz_type.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'monorail.proxy.rlwy.net',
      port: 10259,
      username: 'root',
      password: 'rrMbTslEWPcXlcNRVDEseFwTRlLlDVOO',
      database: 'railway',
      entities: [QuizDetail, Quiz, QuizType,UserDetail, UserAminDetail, User, UsersAdmin],
      synchronize: true,
    }),
    QuizDetailsModule,
    QuizzesModule,
    QuizTypeModule,
    UserDetailModule,
    UserAminDetailModule,
    UsersModule,
    UsersAdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
