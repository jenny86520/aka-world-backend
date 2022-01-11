import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VerifyService {
  constructor(private http: HttpService) {}
  verifyReCaptcha(captcha: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.http
        .post(
          `${process.env.RECAPTCHA_VERIFY_URL}`,
          `secret=${process.env.RECAPTCHA_SECRETKEY}&response=${captcha}`,
        )
        .subscribe((result) => {
          console.log(result.data);
          if (result.data.success) return resolve(true);
          return resolve(false);
        });
    });
  }
}
