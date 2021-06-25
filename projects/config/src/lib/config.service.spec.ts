import { TestBed } from '@angular/core/testing';
import { CONFIG_TOKEN } from './config.module';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  const config = {
    api: 'path/to/my/api',
    environment: 'DEV'
  };

  let configService: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: config
        }
      ]
    });

    configService = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(configService).toBeTruthy();
  });

  it('should return value from given key', () => {
    expect(configService.get('api')).toBe('path/to/my/api');
  });

  it('shuold return all config value', () => {
    expect(configService.getAll()).toEqual(config);
  });
});
