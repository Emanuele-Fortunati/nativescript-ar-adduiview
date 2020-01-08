import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import { ARTrackingImageDetectedEventData, ARLoadedEventData, ARUIViewOptions, AR } from "nativescript-ar";
import { Page } from "tns-core-modules/ui/page/page";
import * as app from "tns-core-modules/application";

@Component({
    selector: "ARView",
    templateUrl: "./ar.component.html"
})
export class ARComponent implements OnInit {

    ar: AR;

    constructor(private routerExtensions: RouterExtensions, private page: Page) {
        // Use the component constructor to inject providers.
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    arLoaded(args: ARLoadedEventData): void {
        console.log(">> arLoaded, object: " + args.object);
        this.ar = args.object;
    }

    onImageDetected(args: ARTrackingImageDetectedEventData) {
        console.log("Tracked image detected (name): " + args.imageName);

        args.imageTrackingActions.addUIView({
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            view: this.page.getViewById("bigView")
        });

    }

    goBack(): void {
        // UNCOMMENT THIS
        // and you will get
        // ERROR Error: View not added to this instance. View: AbsoluteLayout<bigView> CurrentParent: null ExpectedParent: AbsoluteLayout<arview>
        // That actually shows the view isn't anymore in there, but for the NativeScript engine it still is somehow

        // this.page.getViewById("arview").eachChild((child) => {
        //     console.log(child.id);
        //     this.page.getViewById("arview")._removeView(child);
        // });

        this.routerExtensions.back();
    }


    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
