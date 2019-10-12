import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownDetailsComponent } from './markdownDetails.component';
import { AppMarkedModule } from '../../shared/directives/directives.module';

@NgModule({
    imports: [
        CommonModule,

        AppMarkedModule
    ],
    declarations: [MarkdownDetailsComponent],
    exports: [MarkdownDetailsComponent],
    bootstrap: [MarkdownDetailsComponent]
})
export class MarkdownDetailsModule { }
