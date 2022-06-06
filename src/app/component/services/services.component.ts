import { Component, OnInit } from '@angular/core';
import { WorksService } from 'src/app/common/services/work/works.service';
import { Feature } from 'src/app/interface/service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBookOpen, fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
title:string = "Services";
services: Array<Feature> = [];
  constructor(private workService: WorksService,
    library: FaIconLibrary) { 
      library.addIconPacks(fas);
      library.addIcons(faBookOpen);
  }

  ngOnInit(): void {
      this.workService.getListServices().subscribe(services => this.services = services);
  }

}
