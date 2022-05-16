import { AuthenticationService } from './../../services/authentication.service';
import { Component } from '@angular/core';
import { ROUTES } from './side-nav-routes.config';
import { ThemeConstantService } from '../../services/theme-constant.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {
  public menuItems: any[];
  isFolded: boolean;
  isSideNavDark: boolean;
  isExpand: boolean;
  public role: any = [];

  constructor(
    private themeService: ThemeConstantService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.themeService.isMenuFoldedChanges.subscribe(
      (isFolded) => (this.isFolded = isFolded)
    );
    this.themeService.isExpandChanges.subscribe(
      (isExpand) => (this.isExpand = isExpand)
    );
    this.themeService.isSideNavDarkChanges.subscribe(
      (isDark) => (this.isSideNavDark = isDark)
    );
    this.role = this.authService.GetRole();

    //console.log(this.role.groups[0].authority);
    localStorage.setItem('ROLE',this.role.groups[0].authority);
  }

  closeMobileMenu(): void {
    if (window.innerWidth < 992) {
      this.isFolded = false;
      this.isExpand = !this.isExpand;
      this.themeService.toggleExpand(this.isExpand);
      this.themeService.toggleFold(this.isFolded);
    }
  }
}
