import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map.component-routing.module';
import { AgmCoreModule } from '@agm/core';
import { GeoLocationService } from 'src/app/shared/geo-location.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapRoutingModule,
    SlideModule,
    AgmCoreModule
  ],
  providers:[
    GeoLocationService
  ],
  declarations: [MapComponent],
  exports:[],
})
export class MapModule {}
