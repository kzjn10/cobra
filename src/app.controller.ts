import { Controller, Get , Res} from '@nestjs/common';
import { AppService } from './app.service';
import * as path from 'path';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloWorld(@Res() res: Response){
    res.send(this.appService.getHello())
  }

  @Get('find-phone-policy')
  getFindPhonePolicy(@Res() res: Response): void {
    const filePath = path.join(__dirname, '..', 'files', 'find-phone-policy.html');
    res.sendFile(filePath);
  }

  @Get('find-phone-term')
  getFindPhoneTerm(@Res() res: Response): void {
    const filePath = path.join(__dirname, '..', 'files', 'find-phone-term.html');
    res.sendFile(filePath);
  }
}
