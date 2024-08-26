import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wifi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ssid: string;

  @Column()
  password: string;

  @Column()
  createTime: string;

  @Column()
  updateTime: string;

  @Column({ default: true })
  isActive: boolean;
}
