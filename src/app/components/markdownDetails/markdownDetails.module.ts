import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownDetailsComponent } from './markdownDetails.component';
import { AppMarkedModule } from '../../directives';
import { MarkdownDetailsService } from './markdownDetails.service';

@NgModule({
    imports: [
        CommonModule,
        AppMarkedModule
    ],
    declarations: [MarkdownDetailsComponent],
    providers: [MarkdownDetailsService],
    exports: [MarkdownDetailsComponent],
    bootstrap: [MarkdownDetailsComponent]
})
export class MarkdownDetailsModule { }
