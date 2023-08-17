import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';
import * as randomNumber from 'random-number';
import { writeFile } from 'fs/promises';
import { IBodyType } from './interfaces/bodytype.interface';
import { generatePayloadType } from './interfaces/payload.typing';

@Injectable()
export class AppService {
  getParamType(reqBody: IBodyType): any {
    type PayloadType<T> = ReturnType<typeof generatePayloadType>;
    type MetricPayload = PayloadType<typeof reqBody>;

    const payload: MetricPayload = {
      index: 0,
      card_type: 1,
      phrase: 'Hello',
    };

    return payload;
  }

  async getHello(body): Promise<void> {
    const publisher = createClient({
      socket: {
        host: '127.0.0.1',
      },
    });

    const subscriber = createClient({
      socket: {
        host: '127.0.0.1',
      },
    });

    publisher.on('error', (err) => console.log('Redis Client Error', err));
    subscriber.on('error', (err) => console.log('Redis Client Error', err));

    await subscriber.connect();
    await subscriber.subscribe('transmitter', async (message) => {
      console.log(JSON.parse(message)); // 'message'
      if (JSON.parse(message).code === 0) {
        await writeFile(`_${body.task}_.json`, message);
      }
      subscriber.quit();
    });

    body.id = randomNumber({
      min: 10000000,
      max: 99999999,
      integer: true,
    });

    await publisher.connect();
    await publisher.publish('adapter-muik', JSON.stringify(body));
    await publisher.disconnect();
  }

  async easrListener(body): Promise<void> {
    const publisher = createClient({
      socket: {
        host: '127.0.0.1',
      },
    });

    const subscriber = createClient({
      socket: {
        host: '127.0.0.1',
      },
    });

    publisher.on('error', (err) => console.log('Redis Client Error', err));
    subscriber.on('error', (err) => console.log('Redis Client Error', err));

    await subscriber.connect();
    await subscriber.subscribe('transmitter', async (message) => {
      console.log(JSON.parse(message)); // 'message'
      if (JSON.parse(message).code === 0) {
        await writeFile(`_${body.task}_.json`, message);
      }
      subscriber.quit();
    });

    body.id = randomNumber({
      min: 10000000,
      max: 99999999,
      integer: true,
    });

    await publisher.connect();
    await publisher.publish('adapter-easr', JSON.stringify(body));
    await publisher.disconnect();
  }

  async diplomFunctionListener(body): Promise<void> {
    const publisher = createClient({
      socket: {
        host: '127.0.0.1',
      },
    });

    const subscriber = createClient({
      socket: {
        host: '127.0.0.1',
      },
    });

    publisher.on('error', (err) => console.log('Redis Client Error', err));
    subscriber.on('error', (err) => console.log('Redis Client Error', err));

    await subscriber.connect();
    await subscriber.subscribe('transmitter', async (message) => {
      console.log(JSON.parse(message)); // 'message'
      if (JSON.parse(message).code === 0) {
        await writeFile(`_${body.task}_.json`, message);
      }
      subscriber.quit();
    });

    body.id = randomNumber({
      min: 10000000,
      max: 99999999,
      integer: true,
    });

    await publisher.connect();
    await publisher.publish('adapter', JSON.stringify(body));
    await publisher.disconnect();
  }

  async nriListener(body): Promise<void> {
    const publisher = createClient({
      socket: {
        host: '127.0.0.1',
      },
    });

    const subscriber = createClient({
      socket: {
        host: '127.0.0.1',
      },
    });

    publisher.on('error', (err) => console.log('Redis Client Error', err));
    subscriber.on('error', (err) => console.log('Redis Client Error', err));

    await subscriber.connect();
    await subscriber.subscribe('transmitter', async (message) => {
      console.log(JSON.parse(message)); // 'message'
      if (JSON.parse(message).code === 0) {
        await writeFile(`_${body.task}_.json`, message);
      }
      subscriber.quit();
    });

    body.id = randomNumber({
      min: 10000000,
      max: 99999999,
      integer: true,
    });

    await publisher.connect();
    await publisher.publish('adapter-nri', JSON.stringify(body));
    await publisher.disconnect();
  }

  async hpsaListener(body: any): Promise<void> {
    const publisher = createClient({
      socket: {
        host: '127.0.0.1',
      },
    });

    const subscriber = createClient({
      socket: {
        host: '127.0.0.1',
      },
    });

    publisher.on('error', (err) => console.log('Redis Client Error', err));
    subscriber.on('error', (err) => console.log('Redis Client Error', err));

    await subscriber.connect();
    await subscriber.subscribe('transmitter', async (message) => {
      console.log(JSON.parse(message)); // 'message'
      if (JSON.parse(message).code === 0) {
        await writeFile(`_${body.task}_.json`, message);
      }
      subscriber.quit();
    });

    body.id = randomNumber({
      min: 10000000,
      max: 99999999,
      integer: true,
    });

    await publisher.connect();
    await publisher.publish('adapter-hpsa', JSON.stringify(body));
    await publisher.disconnect();
  }
}
