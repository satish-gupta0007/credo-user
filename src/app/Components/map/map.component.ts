import { MapsAPILoader } from "@agm/core";
import { Position } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { Observable } from "rxjs";
import { GeoLocationService } from "src/app/shared/geo-location.service";
// import { MouseEvent  } from '@agm/core';
declare let google: any;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
  title: string = "My first AGM project";
  // lat: number = 51.678418;
  // lng: number = 7.809007;
  height = 0;
  private event: MouseEvent;
  bounds = null;
  constructor(
    public platform: Platform,
    private geoLocationService: GeoLocationService,
    private mapsAPILoader: MapsAPILoader
  ) {
    console.log(platform.height());
    this.height = platform.height() - 56;
    this.mapsAPILoader.load().then(() => {
      this.bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng( 22.258651999999998,71.1923805), // SW
        // new google.maps.LatLng(51.891257, 0.559417) 
        // NE
      );
      console.log(this.bounds);
    });
  }

  coordinates;
  ngOnInit() {
    this.geoLocationService.getPosition().subscribe((pos: any) => {
      // debugger
      this.coordinates = {
        latitude: +pos.coords.latitude,
        longitude: +pos.coords.longitude,
      };
      console.log(this.coordinates);
      console.log(this);
      if(this.coordinates){
        this.getAddress(this.coordinates.latitude,this.coordinates.longitude)
        // this.getLocation(this.coordinates)
        // this.geoLocationService(this.coordinates.latitude,this.coordinates.longitude)
      }
      
    });
  }
//   getLocation(address: string): Observable<any> {
//     console.log('Getting address: ', address);
//     let geocoder = new google.maps.Geocoder();
//     return Observable.create(observer => {
//         geocoder.geocode({
//             'address': address
//         }, (results, status) => {
//             if (status == google.maps.GeocoderStatus.OK) {
//                 observer.next(results[0].geometry.location);
//                 observer.complete();
//             } else {
//                 console.log('Error: ', results, ' & Status: ', status);
//                 observer.error();
//             }
//         });
//     });
// }
address
getAddress( lat: number, lng: number ) {
  console.log('Finding Address');
  if (navigator.geolocation) {
    let geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(lat, lng);
    let request = { latLng: latlng };
    geocoder.geocode(request, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        let result = results[0];
        let rsltAdrComponent = result.address_components;
        let resultLength = rsltAdrComponent.length;
        if (result != null) {
          this.address = rsltAdrComponent[resultLength - 8].short_name;
        } else {
          alert('No address available!');
        }
      }
    });
}
}

  // getGeoLocation(lat: number, lng: number) {
  //   if (navigator.geolocation) {
  //       let geocoder = new google.maps.Geocoder();
  //       let latlng = new google.maps.LatLng(lat, lng);
  //       let request = {
  //           latLng: latlng
  //       };
        // geocoder.geocode(request, (results, status) = > {
        //     if (status == google.maps.GeocoderStatus.OK) {
        //         let result = results[0];
        //         let rsltAdrComponent = result.address_components;
        //         let resultLength = rsltAdrComponent.length;
        //         if (result != null) {
        //             this.marker.buildingNum = rsltAdrComponent.find(x = > x.types == 'street_number').long_name;
        //             this.marker.streetName = rsltAdrComponent.find(x = > x.types == 'route').long_name;
        //         } else {
        //             alert("No address available!");
        //         }
        //     }
        // });
//     }
// }

}
