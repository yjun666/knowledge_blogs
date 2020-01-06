import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestTestDetailsComponent } from './requestTestDetails.component';

@NgModule({
    imports: [CommonModule],
    declarations: [RequestTestDetailsComponent],
    exports: [RequestTestDetailsComponent],
    bootstrap: [RequestTestDetailsComponent]
})
export class RequestTestDetailsModule { }
