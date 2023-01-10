import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';

@Injectable()
export class AppService {
  async getHello(body): Promise<void> {
    const publisher = createClient({
      socket: {
        host: '192.168.221.142',
      },
      password: 'sOmE_sEcUrE_pAsS',
    });

    const subscriber = createClient({
      socket: {
        host: '192.168.221.142',
      },
      password: 'sOmE_sEcUrE_pAsS',
    });

    publisher.on('error', (err) => console.log('Redis Client Error', err));
    subscriber.on('error', (err) => console.log('Redis Client Error', err));

    await subscriber.connect();
    await subscriber.subscribe('myCoolChannel2', (message) => {
      console.log(JSON.parse(message)); // 'message'
      subscriber.quit();
    });

    body.additional = {
      test1: 'test1',
      test2: 'test2',
    };

    await publisher.connect();
    await publisher.publish('myCoolChannel1', JSON.stringify(body));
    await publisher.disconnect();
  }
}
