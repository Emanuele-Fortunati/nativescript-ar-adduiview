import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ARRoutingModule } from "./ar-routing.module";
import { ARComponent } from "./ar.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ARRoutingModule
    ],
    declarations: [
        ARComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ARModule { }
