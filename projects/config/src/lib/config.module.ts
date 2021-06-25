import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import * as joi from 'joi';

export interface IConfig<T> {
  [key: string]: T;
}

export const CONFIG_TOKEN: InjectionToken<IConfig<unknown>> = new InjectionToken<unknown>('Config');

@NgModule({
  imports: [CommonModule]
})
export class ConfigModule {
  public static forRoot<T>({ config, schema }: { config: T, schema: joi.ObjectSchema }): ModuleWithProviders<ConfigModule> {
    const validation: joi.ValidationResult = schema.validate(config);

    if (validation.error) {
      throw new Error(`${validation.error.message}`);
    }
    
    return {
      ngModule: ConfigModule,
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: config
        }
      ],
    }
  }
}
