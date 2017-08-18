import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StatesComponent } from './components/states/states.component';
import { HudComponent } from './components/hud/hud.component';
import { PlumeRadarComponent } from './components/plume-radar/plume-radar.component';
import { WindChangeComponent } from './components/wind-change/wind-change.component';
import { FireWeatherComponent } from './components/fire-weather/fire-weather.component';
import { PlumeChangeComponent } from './components/plume-change/plume-change.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatesComponent,
    HudComponent,
    PlumeRadarComponent,
    WindChangeComponent,
    FireWeatherComponent,
    PlumeChangeComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVEcZLXRA7EjgKbRVUBdnWyMiXYTBmTxs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
