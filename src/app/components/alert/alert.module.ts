import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';

@NgModule({
    imports: [CommonModule],
    declarations: [AlertComponent],
    providers: [AlertService],
    bootstrap: [AlertComponent]
})
export class AlertModule { }
