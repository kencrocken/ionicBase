import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { AccountComponent } from './account-component/account.component';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AccountComponent
  ],
  entryComponents:[
    AccountComponent
  ]
})
export class AccountModule {}
