/*

https://scotch.io/@kashyapmukkamala/using-http-interceptor-with-angular2


*/


import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import {NeedFulfillmentsService} from '../../providers/needFulfillments-service';
import {NeedFulfillmentsModel} from '../../models/needFulfillments.model';


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
  need_fulfillments: any;
  inventory: any;
  hidebutton: any;
  completionmessage: any;

  constructor(public geolocation: Geolocation, public needFulfillmentsService: NeedFulfillmentsService) {
    //console.log('Hello AppHeaderComponent Component');
    //this.text = 'Hello World';
  }

	ngOnInit() {
		this.needs = this.filterViewableNeeds(this.hashToArray(this.entity.data.need_types[0]));
		this.inventory = this.filterViewableNeeds(this.hashToArray(this.entity.data.need_types[1]));
    this.datapoints = this.filterViewableDatapoints(this.hashToArray(this.entity.data.datapoints));
		this.need_fulfillments = this.entity.need_fulfillments;
		this.loadMap(this.entity.data.entity.latitude, this.entity.data.entity.longitude);
    this.hidebutton = {};
    this.completionmessage = false;

    for (var n in this.need_fulfillments) {
      this.hidebutton[this.need_fulfillments[n]['need_id']] = true;
    }
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

  addNeedfulfillment(need_id, group_id) {
    this.needFulfillmentsService.add(need_id, group_id)
      .then(data => {
        if (data['success']) {
          this.need_fulfillments = data['data'];
          this.hidebutton[data['data'][0]['need_id']] = true;
        }
      })
      .catch(e => console.log("View tickets error", e));
  }

  submitStage(id, psm) {

    var doc = <HTMLFormElement>document.getElementById('psmform_'+psm.id)
    var formData = {};
    var inputs = doc.getElementsByClassName('dvinput');
    for (var i = 0; i < inputs.length; i++) {
      var el = <HTMLFormElement>inputs[i]
      if (!formData['datapoint_value']) { 
        formData['datapoint_value'] = {}
      }
      if (!formData['datapoint_value'][el.dataset.dvid]) { 
        formData['datapoint_value'][el.dataset.dvid] = {}
      }
      formData['datapoint_value'][el.dataset.dvid][el.name] = el.value;
    }

    this.needFulfillmentsService.advance(id, formData, this.entity.scope)
      .then(data => {
        if (data.success) {
          this.need_fulfillments = data.data;
        }
        if (data.final) {
          this.completionmessage = true;
        }
      })
      .catch(e => console.log("View tickets error", e));


    //this.need_fulfillments = [];

    // https://forum.ionicframework.com/t/removing-previous-page-from-nav-stack/100952/7
    /*
    let currentIndex = this.navCtrl.getActive().index;
    this.navCtrl.push('TicketsInfoPage', {ticket_id: id, campaign_id: this.campaign.id}).then(() => {
        this.navCtrl.remove(currentIndex);
    });
    */

    /*
    var formdata = [];
    var inputs = doc.getElementsByClassName('input');
    for (var i = 0; i < inputs.length; i++) {
      var el = inputs[i]
      formdata[el.name] = el.value;
    }
    console.log(formdata);
    */
  }

  showForm(psm) {
    var hider = document.getElementById('psmhider_'+psm.id)
    hider.style.display = 'block';
    var button = document.getElementById('psmdonebutton_'+psm.id)
    button.style.display = 'none';
  }


	loadMap(lat: number, lng: number) {
 
    let latLng = new google.maps.LatLng(lat, lng);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      gestureHandling: 'cooperative'
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