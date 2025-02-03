import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, FormsModule,DialogModule],
  exports: [UserComponent], // Export if needed in other modules
})
export class UserModule {}
