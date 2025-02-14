import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// npm i @nestjs/swagger@7.3.0 --legacy-peer-deps
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalPipes(new ValidationPipe()); //global validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, //this will whitelist only the described params. This is to avoid incorrect parameter usage by stripping off extra params
    forbidNonWhitelisted: true, //this will throw an error for exta params
    transform:true, //What this does is that it transforms the incoming request to an instance of the DTO class after validation.
  })); //global validation

  /*
   * Install Swagger
   * npm i @nestjs/swagger@7.3.0
   */

  //npm run doc //for generating compodoc
  //npm i typeorm@0.3.20 @nestjs/typeorm@10.0.2 pg@8.11.5 --legacy-peer-deps

  // Create the swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS Masterclass - Blog app API')
    .setDescription('Use the base API URL as http://localhost:3000')
    .setTermsOfService('http://localhost:3000/terms-of-service') //sample url
    .setLicense(
      'MIT License',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt',
    )
    .addServer('http://localhost:3000/')
    .setVersion('1.0')
    .build();
  // Instantiate Swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
