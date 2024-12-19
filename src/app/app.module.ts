import {NgModule} from '@angular/core';
import {AppComponent} from '@app/app.component';
import {CoreModule} from '@core/core.module';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
