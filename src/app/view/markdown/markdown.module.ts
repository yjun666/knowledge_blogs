import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MarkdownComponent } from './markdown.component';
import { SideBarModule, MarkdownDetailsModule } from '../../components/component.module';



const adminRoutes: Routes = [
    {
        path: '',
        component: MarkdownComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        SideBarModule,
        MarkdownDetailsModule,
        RouterModule.forChild(adminRoutes)
    ],
    declarations: [
        MarkdownComponent
    ],
    exports: [
        RouterModule
    ]
})
export class MarkdownModule { }
