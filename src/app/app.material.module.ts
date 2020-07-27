import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatFormFieldModule } from '@angular/material/form-field';
    
    


@NgModule({
    imports: [
        MatToolbarModule,
        MatInputModule,
        MatTableModule, 
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatFormFieldModule
    ],
    exports: [
        MatToolbarModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatFormFieldModule
    ]
})
export class AppMaterialModule { }
