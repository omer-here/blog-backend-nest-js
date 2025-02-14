import { Module } from '@nestjs/common';
import { AppController } from '../app/app.controller';
import { AppService } from '../app/app.service';

//Here we will import all the custom created modules and add to the import array
import { UsersModule } from 'src/users/users.module';
import { PostsModule } from 'src/posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/users/user.entity';
import { TagsModule } from 'src/tags/tags.module';
import { MetaOptionsModule } from 'src/meta-options/meta-options.module';


// although we can generate the module and add it automatically by using nest generate module MODULE_NAME but for this
// the app module files should be inside the src directory


@Module({
  imports: [UsersModule, PostsModule, AuthModule, TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: ()=>({      
      type: 'postgres',
      // entities: [User], //here we add entities manually
      autoLoadEntities: true, //it auto load entities
      synchronize: true, //It is because of this particular setting that this synchronization between Nestjs application as well as Postgres database is happening automatically.
      port: 5432,
      username: 'postgres',
      password: 'SuperUser',
      host: 'localhost',
      database: 'nestjs-blog',
      }),
    }),
    TagsModule,
    MetaOptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
