import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { OrganizationService } from './organization.service';

@Injectable({
  providedIn: 'root',
})
export class InitializerService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    private orgService: OrganizationService
  ) {}

  setOrganizationDetail() {
    const hostName = window.location;
    // console.log('hostName', hostName);
    const primary = this.getRandomColor();
    const color = this.isLightColor(primary.substring(1)) ? '#121212' : '#FFF';
    this.orgService.setOrg({ ...hostName, primary, color });
  }

  private isLightColor(color: string) {
    const rgb = parseInt(color, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const lumaCoefficients = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lumaCoefficients >= 155 ? true : false;
  }

  private getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

export const AppInitializerFactory: Function = (
  initService: InitializerService
) => {
  return () => {
    return new Promise((resolve, reject) => {
      try {
        initService.setOrganizationDetail();
        resolve(true);
      } catch (e) {
        resolve(true);
      }
    }).catch((e) => {});
  };
};
