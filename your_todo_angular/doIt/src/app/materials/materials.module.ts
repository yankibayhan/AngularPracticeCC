import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';


const MaterialComps = [

    MatButtonModule,
]




@NgModule({
  imports: [ MaterialComps ],
  exports: [MaterialComps]
})
export class MaterialsModule { }
