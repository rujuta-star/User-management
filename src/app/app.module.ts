import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { UserService } from './components/user/user.service';
import { MessageService } from 'primeng/api';

import { FormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';

import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    
    DashboardComponent,
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    LoginComponent,
    
    ButtonModule,
    HttpClientModule,
    DropdownModule,
    RadioButtonModule,
    
    ToastModule,
    CalendarModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [MessageService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
