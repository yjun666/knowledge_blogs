import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { HeaderComponent } from './header.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        NzDropDownModule,
        NzGridModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    bootstrap: [HeaderComponent]
})
export class HeaderModule { }
