import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';

@Injectable()
export class AppService {
  async getHello(body): Promise<void> {
    const client = createClient({
      socket: {
        host: '192.168.221.142',
      },
      password: 'sOmE_sEcUrE_pAsS',
    });

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();
    const subscriber = client.duplicate();
    const publisher = client.duplicate();

    await publisher.publish('myCoolChannel1', body.message);

    await subscriber.subscribe('myCoolChannel2', (message) => {
      console.log(message); // 'message'
    });
  }
}
