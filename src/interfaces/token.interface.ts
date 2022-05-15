import { JwtPayload } from 'jsonwebtoken';

export interface PayloadDecoded extends JwtPayload {
  userId: number;
}