import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN, IConfig, TConfig } from './config.module';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(
    @Inject(CONFIG_TOKEN)
    private readonly config: IConfig<TConfig>
  ) { }

  public get<T>(key: string): T {
    return this.config[key] as T;
  }

  public getAll<T>(): IConfig<T | TConfig> {
    return this.config;
  }
}