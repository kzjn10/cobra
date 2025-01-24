import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getFindPhonePolicy(res: Response): void;
    getFindPhoneTerm(res: Response): void;
}
