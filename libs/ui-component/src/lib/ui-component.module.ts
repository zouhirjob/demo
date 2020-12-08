import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesjSidenavComponent } from './desj-sidenav/desj-sidenav.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatLineModule, MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatCardModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
    MatLineModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatChipsModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatSliderModule,
    MatSidenavModule,
    MatStepperModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatOptionModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatDividerModule
  ],
  declarations: [DesjSidenavComponent],
  exports: [
    DesjSidenavComponent 
  ]
})
export class UiComponentModule {}
