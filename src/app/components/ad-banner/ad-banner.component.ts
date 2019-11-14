import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
              <div class="ad-banner-example" [ngStyle]='{"display": isShowAD ? "inline-block" : "none" }'>
                <h3>Advertisements</h3>
                <div (click)='closeAD()' style='position:absolute;right:0;top:0;color:red;'>关闭广告X</div>
                <ng-template ad-host></ng-template>
              </div>
            `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  isShowAD = true;
  @ViewChild(AdDirective, { static: false }) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  // 关闭广告
  closeAD() {
    this.isShowAD = false;
  }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;

    viewContainerRef.clear(); // 清除模版

    const componentRef = viewContainerRef.createComponent(componentFactory);

    (componentRef.instance as AdComponent).data = adItem.data;

  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
