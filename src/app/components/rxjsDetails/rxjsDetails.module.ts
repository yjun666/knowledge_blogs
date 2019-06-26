import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsDetailsComponent } from './rxjsDetails.component';

@NgModule({
    imports: [CommonModule],
    declarations: [RxjsDetailsComponent],
    exports: [RxjsDetailsComponent],
    providers: [],
    bootstrap: [RxjsDetailsComponent]
})
export class RxjsDetailsModule { }
