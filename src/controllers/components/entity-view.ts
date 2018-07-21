import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';


declare var google;

@Component({
  selector: 'entity-view',
  templateUrl: '../../pages/components/entity-view.html'
})
export class EntityViewComponent {

	@ViewChild('map') mapElement: ElementRef;
  map: any;

	@Input()
    entity: any;

  text: string;
  datapoints: any;
  needs: any;
  inventory: any;

  constructor(public geolocation: Geolocation) {
    //console.log('Hello AppHeaderComponent Component');
    //this.text = 'Hello World';
  }

	ngOnInit() {
		this.needs = this.filterViewableNeeds(this.hashToArray(this.entity.data.need_types[0]));
		this.inventory = this.filterViewableNeeds(this.hashToArray(this.entity.data.need_types[1]));
		this.datapoints = this.filterViewableDatapoints(this.hashToArray(this.entity.data.datapoints));

		console.log(this.needs);
		this.loadMap(this.entity.data.entity.latitude, this.entity.data.entity.longitude);
	}

	filterViewableDatapoints(array) {
		var newarray = [];
		for (var a in array) {
			if (array[a].viewed) {
				newarray.push(array[a]);
			}
		}
		return newarray;
	}
	filterViewableNeeds(array) {
		var newarray = [];
		for (var a in array) {
			if (array[a].viewed && array[a].data.length) {
				newarray.push(array[a]);
			}
		}
		return newarray;
	}

	hashToArray(hash) {
		var array = [];
		for (var id in hash) {
			var obj = hash[id];
			obj.id = id;
			array.push(obj);
		}
		return array;
	}


	loadMap(lat: number, lng: number) {
 
    let latLng = new google.maps.LatLng(lat, lng);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.dropMarker(lat, lng);

    this.geolocation.getCurrentPosition().then((position) => {
      this.dropMarker(position.coords.latitude, position.coords.longitude);
      var fitBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        new google.maps.LatLng(lat, lng)
      );
      this.map.fitBounds(fitBounds);
    }, (err) => {});
  }


  dropMarker(latitude, longitude) {
    var icon = 'http://crowdsourcerescue.com/img/mappin3.png';
    var myLatLng = new google.maps.LatLng({lat: latitude, lng: longitude});
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      icon: icon,
    });
  }

}