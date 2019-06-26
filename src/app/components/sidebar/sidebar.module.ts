import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './sidebar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SideBarComponent],
    exports: [SideBarComponent],
    bootstrap: [SideBarComponent]
})
export class SideBarModule { }
