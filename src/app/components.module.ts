import { NgModule } from '@angular/core';
import { EntityViewComponent } from '../controllers/components/entity-view';
import {IonicModule} from "ionic-angular";

@NgModule({
    declarations: [EntityViewComponent],
    imports: [IonicModule],
    exports: [EntityViewComponent]
})
export class ComponentsModule {}
