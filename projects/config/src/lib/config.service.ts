import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN, IConfig } from './config.module';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(
    @Inject(CONFIG_TOKEN)
    private readonly config: IConfig<unknown>
  ) { }

  public get<T>(key: string): T {
    return this.config[key] as T;
  }

  public getAll<T>(): IConfig<T> {
    return this.config as IConfig<T>;
  }
}