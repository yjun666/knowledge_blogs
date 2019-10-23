import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MarkdownComponent } from './markdown.component';
import { SideBarModule, MarkdownDetailsModule } from '../../components/component.module';



const routes: Routes = [
    {
        path: '',
        component: MarkdownComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SideBarModule,
        MarkdownDetailsModule
    ],
    declarations: [
        MarkdownComponent
    ],
    exports: [
        RouterModule
    ]
})
export class MarkdownModule { }
