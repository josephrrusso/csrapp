import { NgModule } from '@angular/core';
import { EntityViewComponent } from '../controllers/components/entity-view';
import { FormViewComponent } from '../controllers/components/form-view';
import {IonicModule} from "ionic-angular";

@NgModule({
    declarations: [EntityViewComponent, FormViewComponent],
    imports: [IonicModule],
    exports: [EntityViewComponent, FormViewComponent]
})
export class ComponentsModule {}
