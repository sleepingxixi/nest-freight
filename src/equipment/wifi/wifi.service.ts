import { Injectable } from '@nestjs/common';
import { Wifi } from './wifi.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class WifiService {
  constructor(
    @InjectRepository(Wifi)
    private readonly wifiRepository: Repository<Wifi>
  ) { }

  /** 查询所有生效的wifi数据 */
  findAll(): Promise<Wifi[]> {
    return this.wifiRepository.find({
      where: {
        isActive: true
      }
    });
  }

  /** 单个查询 */
  findOne(id: string): Promise<Wifi> {
    return this.wifiRepository.findOne({
      where: {
        id: Number(id)
      }
    });
  }

  /**
   * 批量更新wifi
   * @param updates 使用createQueryBuilder创建查询构建器。
   * 使用update方法设置更新的内容。
   * 使用set方法设置更新的字段。
   * 调用execute执行批量更新。
   */
  async batchDeleteWifi(updates: number[]): Promise<UpdateResult> {
    return this.wifiRepository
      .createQueryBuilder()
      .update(Wifi)
      .set({
        isActive: false
      })
      .where('id IN (:...ids)', { ids: updates })
      .execute();
  }

  async updateWifi(id: number, attrs: Partial<Wifi>): Promise<Wifi> {
    // 使用TypeORM的findOne方法来获取实体
    const wifi =
      (await this.wifiRepository.findOne({
        where: {
          id
        }
      })) || {};
    // 将传入的属性复制到已获取的实体上
    Object.assign(wifi, attrs);
    return this.wifiRepository.save(wifi);
  }

  async createWifi(attrs: Partial<Wifi>): Promise<Wifi> {
    return this.wifiRepository.save(attrs);
  }
}
