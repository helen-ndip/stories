import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HeroeComponent } from './heroe/heroe.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ServicesComponent,
    TestimonialComponent,
    HeroeComponent
  ],
  exports: [
      FooterComponent,
      HeaderComponent,
      ServicesComponent,
      TestimonialComponent,
      HeroeComponent
    ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class ComponentModule { }
