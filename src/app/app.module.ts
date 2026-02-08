import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditCardDirective } from './directives/credit-card.directive';
import { SummaryPipePipe } from './pipes/summary-pipe.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CsshighlitherDirective } from './directives/csshighlither.directive';
import { AdvanceCsshighlitghterDirective } from './directives/advance-csshighlitghter.directive';
import { LowercaseDirective } from './directives/lowercase.directive';
import { SummarypipewordPipe } from './pipes/summarypipeword.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    SummaryPipePipe,
    FilterPipePipe,
    CsshighlitherDirective,
    AdvanceCsshighlitghterDirective,
    LowercaseDirective,
    SummarypipewordPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
