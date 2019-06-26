import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LodashDetailsComponent } from './lodashDetails.component';

@NgModule({
    imports: [CommonModule],
    declarations: [LodashDetailsComponent],
    exports: [LodashDetailsComponent],
    bootstrap: [LodashDetailsComponent]
})
export class LodashDetailsModule { }
