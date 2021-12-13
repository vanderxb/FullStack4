import {
    Injectable,
    ConflictException,
    UnauthorizedException,
    NotFoundException,
  } from '@nestjs/common';
  import { CreateUserDto } from './dto/create-user.dto';
  import { UpdateUserDto } from './dto/update-user.dto';
  import { PrismaService } from 'src/prisma.service';
  import { User } from '@prisma/client';
  import * as bcrypt from 'bcrypt';
  
  @Injectable()
  export class UsersService {
    constructor(private database: PrismaService) {}
  
    async create(userdata: CreateUserDto): Promise<User> {
      if (userdata.password !== userdata.passwordConfirmation) {
        throw new UnauthorizedException(
          'Passwords do not match',
        );
      }
  
      const userExists = await this.database.user.findUnique({
        where: { email: userdata.email },
      });
  
      if (userExists) {
        throw new ConflictException('This email already exists');
      }
  
      const rounds = 10;
      const passwordHash = await bcrypt.hash(userdata.password, rounds);
  
      delete userdata.passwordConfirmation;
  
      const user = await this.database.user.create({
        data: {
          ...userdata,
          password: passwordHash,
        },
      });
  
      delete user.password;
      return user;
    }
  
    async update(id: string, userdata: UpdateUserDto): Promise<User> {
      const user = await this.database.user.update({
        data: userdata,
        where: { id: id },
      });
  
      delete user.password;
  
      return user;
    }
  
    async findMany(): Promise<any[]> {
      const user = await this.database.user.findMany();
      const userNoPass = user.map(({ password, ...resto }) => resto);
      return userNoPass;
    }
  
    async findUnique(id: string): Promise<User> {
      const user = await this.database.user.findUnique({
        where: { id },
      });
  
      if (!user) {
        throw new NotFoundException(
          'User not found',
        );
      }
  
      delete user.password;
      return user;
    }
  
    async delete(id: string): Promise<{ message: string }> {
      const user = await this.database.user.findUnique({
        where: { id },
      });
  
      if (!user) {
        throw new NotFoundException(
          'User not found',
        );
      } else {
        await this.database.user.delete({
          where: { id },
        });
      }
  
      return {
        message: 'Successfully deleted',
      };
    }

    
  }
