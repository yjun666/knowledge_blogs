import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NzDropDownModule } from 'ng-zorro-antd';
import { HeaderComponent } from './header.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        NzDropDownModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    bootstrap: [HeaderComponent]
})
export class HeaderModule { }
