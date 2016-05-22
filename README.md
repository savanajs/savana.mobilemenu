# Savana Mobile Menu
Build a mobile menu to from your main menu

##Use:
```
 $savana(document).done(function(e){

        $savana("body").mobilemenu({
           classMenu: 'ul.menu-mobile-nivel-1', // Hide in Mobile
           classMenuNivel1: 'ul.menu-mobile-nivel-1', // Identifier main menu
           classMenuNivel2: 'ul.menu-mobile-nivel-2' // Primary identifier of the sub menu
        });
        
    });
```
##All params:
```
 {
            classMenu: 'ul.menu-mobile-nivel-1', // Hide in Mobile
            titleDefault: "Menu princiapal", // title defaulf of menu
            classBtnMenuMobile: "a.sjs-btn-menu", // Class menu button
            insertBtnMenuMobileAfter: "body", // Insert menu button after....
            classMenuNivel1: 'ul.menu-mobile-nivel-1', // Identifier main menu
            classMenuNivel2: 'ul.menu-mobile-nivel-2', // Primary identifier of the sub menu
            classAside: '.make-all-aside', // General container side of categories...
            classAsideNavs: '.make-nav', // Container side of categories
            classAsideFilter: '.make-filter', // Container side of filter
            classMegamenu: 'div.megamenu', // Class of megamenu
            classBackMenu: 'p.sjs-menu-back > a', // Class back button menu
            asideFloat: true, // Leave overall container fixed categories
        }

```
##Exemple HTML
```
 <nav>
          <div class="container">
            <div class="row">
              <ul class="menu-mobile-nivel-1 sjs-main-menu">
                  <li>
                    <a href="#menu1">Menu 1</a>
                    <div class="megamenu">
                       <ul class="menu-mobile-nivel-2">
                            <li>
                              <h2><a href="#item2">Sub-item1</a></h2>
                              <ul class="menu-mobile-nivel-3">
                                  <li><a href="#item2">Sub-item1 Item 1</a></li>
                                  <li><a href="#item3">Sub-item1 Item 2</a></li>
                                  <li><a href="#item4">Sub-item1 Item 3</a></li>
                                  <li><a href="#item5">Sub-item1 Item 4</a></li>
                                  <li><a href="#item6">Sub-item1 Item 5</a></li>
                                  <li><a href="#item7">Sub-item1 Item 6</a></li>
                             </ul>
                            </li>
                             <li>
                              <h2><a href="#item2">Sub-item2</a></h2>
                              <ul class="menu-mobile-nivel-3">
                                  <li><a href="#item2">Sub-item2 Item 1</a></li>
                                  <li><a href="#item3">Sub-item2 Item 2</a></li>
                                  <li><a href="#item4">Sub-item2 Item 3</a></li>
                                  <li><a href="#item5">Sub-item2 Item 4</a></li>
                                  <li><a href="#item6">Sub-item2 Item 5</a></li>
                                  <li><a href="#item7">Sub-item2 Item 6</a></li>
                             </ul>
                            </li>
                             <li>
                              <h2><a href="#item2">Sub-item3</a></h2>
                              <ul class="menu-mobile-nivel-3">
                                  <li><a href="#item2">Sub-item3 Item 1</a></li>
                                  <li><a href="#item3">Sub-item3 Item 2</a></li>
                                  <li><a href="#item4">Sub-item3 Item 3</a></li>
                                  <li><a href="#item5">Sub-item3 Item 4</a></li>
                                  <li><a href="#item6">Sub-item3 Item 5</a></li>
                                  <li><a href="#item7">Sub-item3 Item 6</a></li>
                             </ul>
                            </li>
                             <li>
                              <h2><a href="#item2">Sub-item4</a></h2>
                              <ul class="menu-mobile-nivel-3">
                                  <li><a href="#item2">Sub-item3 Item 1</a></li>
                                  <li><a href="#item3">Sub-item3Item 2</a></li>
                                  <li><a href="#item4">Sub-item3 Item 3</a></li>
                                  <li><a href="#item5">Sub-item3 Item 4</a></li>
                                  <li><a href="#item6">Sub-item3 Item 5</a></li>
                                  <li><a href="#item7">Sub-item3 Item 6</a></li>
                             </ul>
                            </li>
                             <li>
                              <h2><a href="#item2">Sub-item5</a></h2>                             
                            </li>
                       </ul>
                    </div>
                  </li>
                  <li><a href="#menu2">Menu 2</a></li>
                  <li><a href="#menu3">Menu 3</a></li>
                  <li><a href="#menu4">Menu 4</a></li>
                  <li><a href="#menu5">Menu 5</a></li>
                  <li><a href="#menu6">Menu 6</a></li>
                  <li><a href="#menu7">Menu 7</a></li>
              </ul>
            </div>
          </div>
      </nav>
```
