import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {
  AccessTokenDto,
  NonPassUserDto,
  SignInDto,
  ValidateUserDto,
} from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

// The AuthService has to retrieve a user and verify the password.
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  // validateUser-method
  async validateUser(input: ValidateUserDto): Promise<NonPassUserDto | null> {
    const user = await this.prismaService.user.findUnique({
      where: { email: input.email },
    });
    if (
      user &&
      user.password &&
      // Verify if two hashed passwords are same.
      bcrypt.compareSync(input.password, user.password)
    ) {
      // Exclude the password not to expose the plane password.
      // Destructuring assignment.
      const {
        password: {},
        ...result
      } = user;
      return result;
    }
    return null;
  }

  // signIn-method
  async signIn(user: SignInDto): Promise<AccessTokenDto> {
    const payload = { username: user.name, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
