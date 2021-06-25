<img src="./logo-octoweb.png"
     alt="Octoweb Logo"
     style="display: block; width: 15%; max-width: 200px; min-width: 100px; margin: auto; margin-top: 20px; margin-bottom: 40px;" />

#### Description

@octoweb/config is an Angular friendly module than give you a better abstraction, security and maintainability of the environment config and its uses.

**Abstraction**
Use ConfigService to get access to the environment properties.

**Security and maintainability**
Using [Joi](https://joi.dev) you should be able to validate your environment file. If environment doesn't match with the schema, it will throw an error.

#### Details

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

It was build with:

- "@angular/common": "^12.0.5"
- "@angular/core": "^12.0.5"
- "joi": "^17.4.0"


#### Get started

`yarn add @octoweb/config` or `npm i @octoweb/config`

#### Example

*app.module.ts*
```
@NgModule({
  ...
  imports: [
    ...,
    ConfigModule.forRoot<IEnvironment>({
      config: environment,
      schema: configSchema,
    })
    ...
  ],
  ...
})
export class AppModule { }
```

config.schema.ts
```
export const configSchema: joi.ObjectSchema = joi.object({
  apiUrl: joi.when('production', { is: false, then: joi.string().required() }),
  production: joi.boolean().default(false).required(),
});
```

app.component.ts
```
import { ConfigService } from '@octoweb/config';

@Component({...})
export class AppComponent {
  ...
  constructor(private readonly configService: ConfigService) {}

  public ngOnInit(): void {
    this.configService.get<string>('apiUrl'); // Return apiUrl
    this.configService.getAll<IEnvironment>(); // Return all environment
  }
  ...
}
```