import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MarkdownComponent } from './markdown.component';
import { SideBarModule } from '../../../components/sidebar/sidebar.module';
import { MarkdownDetailsModule } from '../../../components/markdownDetails/markdownDetails.module';



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
