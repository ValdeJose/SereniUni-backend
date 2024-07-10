import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('SereniUniAPI')
    .setDescription('SereniUniApi ofrece una amplia gama de endpoints para simplificar la integración de sistemas de gestión mental. Explore nuestra documentación para comenzar a integrar SereniUniAPI en su aplicación hoy mismo.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  const corsOptions: CorsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

  app.enableCors(corsOptions);

  const port = process.env.PORT || 8080;
  await app.listen(port);
  console.log(`Application is running on : ${await app.getUrl()}`);
}
bootstrap();
