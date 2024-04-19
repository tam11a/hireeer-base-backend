import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { JobModule } from './job/job.module';
import { SkillsModule } from './skills/skills.module';
import { JobtypesModule } from './jobtypes/jobtypes.module';
import { WorktypesModule } from './worktypes/worktypes.module';
import { IndustriesModule } from './industries/industries.module';
import { LocationsModule } from './locations/locations.module';
import { ExperiencelevelsModule } from './experiencelevels/experiencelevels.module';
@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      // used apollo playground
      playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // this will auto generate a graphql types
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    JobModule,
    SkillsModule,
    JobtypesModule,
    WorktypesModule,
    IndustriesModule,
    LocationsModule,
    ExperiencelevelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
