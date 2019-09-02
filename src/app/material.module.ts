import { NgModule } from '@angular/core';

import { MatButtonModule, 
        MatMenuModule ,
        MatIconModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,

        
      
} from '@angular/material';

import {  MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';




@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatBadgeModule,
        MatDividerModule,
        MatListModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        MatStepperModule
        
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatBadgeModule,
        MatDividerModule,
        MatListModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        MatStepperModule
  
    ]
})

export class MaterialModule{

}