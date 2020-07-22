import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {UserService} from './user.service';
import {EntityDefinitionService} from '@ngrx/data';
import {entityMetadata} from './entity-metadata';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature()
  ],
  providers: [UserService]
})
export class UserModule {
  constructor(eds: EntityDefinitionService) {
    eds.registerMetadataMap(entityMetadata);
  }
}
