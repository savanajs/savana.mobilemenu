/*
Savana Menu Mobile
Created By Rafael Cruz
Contact: projetosavanajs@gmail.com
Version: 0.0.1
Release: 08/02/2016
Framework JavaScript
Brazil, São Paulo
*/

/*
The MIT License (MIT)
Copyright (c) 2016 Savana JS
......................................................................................................

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

!(function($savana, undefined) {

    'use strict';

    $savana.fn.mobilemenu = function(params) {

        var config = savana.extend({
            classMenu: 'ul.menu-mobile-nivel-1', // Hide in Mobile
            titleDefault: "Menu princiapal",
            classBtnMenuMobile: "a.sjs-btn-menu",
            insertBtnMenuMobileAfter: "body",
            classMenuNivel1: 'ul.menu-mobile-nivel-1', // Identifier main menu
            classMenuNivel2: 'ul.menu-mobile-nivel-2', // Primary identifier of the sub menu
            classAside: '.make-all-aside',
            classAsideNavs: '.make-nav',
            classAsideFilter: '.make-filter',
            classMegamenu: 'div.megamenu',
            classBackMenu: 'p.sjs-menu-back > a',
            asideFloat: true,
        }, params);

        // Overall control of the form, which is called in your startup
        // Your code here
        // Use simple singleton
        var controlGeneral = {
            init: function() {
                var _self = this;
                _self.insertBtnMenu();
                _self.getItemsMenu(_self);
                _self.openMenu(_self);
                _self.openMenuSubItens(_self);
                _self.backMenu();
                _self.navAsideButtons();
                _self.btnOpenAside(_self);
                _self.closeAside();
                _self.asideFloat();
                _self.hideMenuInMobile();

                return null;

            },
            hideMenuInMobile: function() {
                if (savana.whatDevice() == "mobile" || savana.whatDevice() == "tablet") {
                    $savana(config.classMenu).hide();
                } else {
                    $savana(config.classMenu).show();
                }
                return null;
            },
            insertBtnMenu: function() {
                $savana(config.insertBtnMenuMobileAfter).push('<a href="#menu" class="sjs-btn-menu"><span></span></a>', 'after');
                return null;
            },
            contentMenu: function(content, nivel, title) {
                return '<div class="animated sjs-content-menu ' + nivel + '"><div class="sjs-header"><h5>' + title + '</h5></div><ul>' + content + '</ul></div>';
            },
            insertContentMenu: function(_self, content, nivel, title) {

                $savana("body").push(_self.contentMenu(content, nivel, title));
                return null;

            },
            getItemsMenu: function(_self) {
                var lis = "";
                var count = 0;
                $savana(config.classMenuNivel1).child("li").each(function(e) {
                    var $this = $savana(this);
                    var namemenu = $this.content("text");
                    var href = $this.child("a").attr("href");
                    var hasSubitem = "";
                    var content_subitems = "";

                    // Verifica se existe sub-categoria
                    if ($this.child(config.classMegamenu).length) {
                        hasSubitem = "<div class='sjs-open-subitem'> + </div>";
                        content_subitems = $this.find(config.classMenuNivel2).copy();
                    }

                    lis += '<li rel="' + count + '" class="sjs-menu-' + savana.rewrite(namemenu) + '"><a href="' + href + '">' + namemenu + '</a> ' + hasSubitem + content_subitems + '</li>';
                    // Sub-items
                    count++;
                });
                _self.insertContentMenu(_self, lis, "sjs-n1", config.titleDefault);
                return null;
            },
            openMenu: function(_self) {
                $savana("body").delegate("click", config.classBtnMenuMobile, function(e) {

                    $savana(this).toggleClass("active");

                    if ($savana(this).hasClass("active")) {
                        $savana(".sjs-content-menu.sjs-n1").removeClass("slideOutLeft").show().animate('slideInLeft');
                    } else {
                        $savana(".sjs-content-menu.sjs-n1, .sjs-content-menu.sjs-n2").removeClass("slideInLeft").animate('slideOutLeft');
                        setTimeout(function() {
                            $savana(".sjs-content-menu.sjs-n2").destroy();
                        }, 2000);
                    }

                    savana.eventStop(e);

                });
                return null;
            },
            openMenuSubItens: function(_self) {
                $savana("body").delegate("click", "div.sjs-open-subitem", function(e) {

                    var $parent = $savana(this).parents("li");
                    $parent.toggleClass("active");
                    var title = "<li class='menu-current'>" + $parent.find("a").eq(0).content("text") + "</li>";

                    var contentUL = title;
                    var hasSubitem = "";
                    $parent.child("ul").child("li").each(function() {

                        var $this = $savana(this);
                        var name = $this.content("html");
                        contentUL += "<li>" + name + hasSubitem + "</li>";

                    });

                    _self.insertContentMenu(_self, contentUL, "sjs-n2", "<p class='sjs-menu-back'><a rel='sjs-n1' href='#back'> < Voltar</a></p>");

                    $savana("div.sjs-n2 > ul > li").each(function() {
                        var $this = $savana(this);
                        if ($this.child("ul").length) {
                            $this.push("<div class='sjs-open-subitem'> + </div>", "after");
                        }
                    });

                    $savana(".sjs-content-menu.sjs-n2").removeClass("slideOutLeft").show().animate('slideInLeft');

                    savana.eventStop(e);

                });
                return null;
            },
            backMenu: function() {
                $savana("body").delegate("click", config.classBackMenu, function(e) {
                    var $this = $savana(this);
                    $this.parents(".sjs-content-menu").removeClass("slideInLeft").animate('slideOutLeft');
                    setTimeout(function() {
                        $this.parents(".sjs-content-menu").destroy();
                    }, 2000);
                    savana.eventStop(e);
                });
                return null;
            },
            navAsideButtons: function() {
                var htmlBtnNav = "<a rel='nav' class='sjs-aside-nav' href='#nav'>Navegação</a>";
                var htmlBtnFilter = "<a rel='filter' class='sjs-aside-filter' href='#filter'>Filtros</a>";

                if (!savana.elementExist(config.classAsideNavs)) htmlBtnNav = "";
                if (!savana.elementExist(config.classAsideFilter)) htmlBtnFilter = "";

                $savana("body").push("<div class='sjs-btns'>" + htmlBtnNav + htmlBtnFilter + "</div>", "before");
                $savana(config.classAside).push("<div class='header-aside'><p></p></div>", "before");
                return null;
            },
            headerTypeAside: function(type) {
                var title;
                if (type == "nav") {
                    title = "<a class='out-nav' href='#'> < Fechar navegação</a>";
                } else {
                    title = "<a class='out-filter' href='#'> < Fechar filtro</a>";
                }
                $savana(config.classAside).find(".header-aside > p").content("html", title);
                return null;
            },
            btnOpenAside: function(_self) {
                $savana("body").delegate("click", ".sjs-btns a", function(e) {
                    var $this = $savana(this);
                    $this.toggleClass("active");
                    var type = $this.attr("rel");
                    $savana(config.classAside).removeClass("active-nav").removeClass("active-filter");
                    $savana(config.classAside).addClass("active-" + type);
                    $savana(config.classAside).removeClass("slideOutLeft").show().animate('slideInLeft');
                    _self.headerTypeAside(type);
                    savana.eventStop(e);
                });
                return null;
            },
            closeAside: function() {

                $savana("body").delegate("click", ".header-aside a", function(e) {
                    $savana(config.classAside).removeClass("slideInLeft").animate('slideOutLeft');
                    savana.eventStop(e);
                });
                return null;
            },
            asideFloat: function() {

                if (config.asideFloat) {

                    var asideHeight = $savana(".make-all-aside").size() + 50;
                    var bodyWidth = $savana("body").size();
                    $savana(window).scroll(function(e) {

                        if (bodyWidth.w > 100 && savana.whatDevice() == "desktop") {

                            if (document.body.scrollTop > asideHeight.h) {
                                $savana(".make-all-aside").addClass("float");
                            } else {
                                $savana(".make-all-aside").removeClass("float");
                            }

                        }

                    });

                }

                return null;

            }


        };

        controlGeneral.init();

    };

})($savana);