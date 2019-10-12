import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './sidebar.component';
import { AppTitleHoverShowModule } from '../../shared/directives/directives.module';

@NgModule({
    imports: [
        CommonModule,
        AppTitleHoverShowModule
    ],
    declarations: [SideBarComponent],
    exports: [SideBarComponent],
    bootstrap: [SideBarComponent]
})
export class SideBarModule { }
