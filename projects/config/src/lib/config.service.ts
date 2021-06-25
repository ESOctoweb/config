import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN } from './config.module';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(
    @Inject(CONFIG_TOKEN)
    private readonly config: { [key: string]: any }
  ) { }

  public get<T>(key: string): T {
    return this.config[key];
  }

  public getAll<T>(): T {
    return this.config as T;
  }
}