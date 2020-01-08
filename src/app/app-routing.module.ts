import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    // { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    // { path: "ar", loadChildren: () => import("~/app/ar/ar.module").then((m) => m.ARModule) }
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "ar", loadChildren: "~/app/ar/ar.module#ARModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
