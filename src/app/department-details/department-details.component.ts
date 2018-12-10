import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h4>
     The selected ID is = {{departmentId}} 
    </h4>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
public departmentId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId=id;
  }

}
