import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column({ nullable: true })
  @Exclude()
  public password?: string;

  @Column()
  public name: string;

  @Column({ nullable: true })
  public avatarId?: number;

  @Column()
  public location: number[];

  @Column()
  public posts: string[];
}

export default User;
