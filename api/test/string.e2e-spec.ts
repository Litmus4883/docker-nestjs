import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('StringController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/string/uppercase (PUT)', () => {
    return request(app.getHttpServer())
      .put('/string/uppercase')
      .send({ message: 'konnichiha!' })
      .expect(200)
      .expect('KONNICHIHA!');
  });

  it('/string/uppercase (PUT)', () => {
    return request(app.getHttpServer())
      .put('/string/uppercase')
      .send({ message: 1 })
      .expect(200)
      .expect('KONNICHIHA!');
  });
});
