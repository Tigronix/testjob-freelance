"use strict"

const TJ = {};

// brakepoints
TJ.fromDesktop = window.matchMedia( "(min-width: 768px)" );
TJ.atMobile = window.matchMedia( "(max-width: 767px)" );

TJ.imgAdaptive = function(){
  const $imgAdaptiveItem = $('.js-adaptive-bg');

  const setImg = function(){
    $imgAdaptiveItem.each(function(){
      if(TJ.fromDesktop.matches){
        const desktopImg = $(this).data('bg-desktop');

        $(this).css('background-image', 'url("'+ desktopImg +'")');
      }

      if(TJ.atMobile.matches){
        const atMobileImg = $(this).data('bg-mobile');

        $(this).css('background-image', 'url("'+ atMobileImg +'")');
      }
    });
  };

  setImg();

  $(window).on('resize', function(){
    setImg();
  });



};

TJ.activeToggle = function(){
  const $elems = $('.js-active-toggle');

  $elems.each(function(){
    $(this).on('click', function(){
      $(this).toggleClass('active');
    });
  });
};

TJ.activeToggleSiblingsOff = function(){
  const $elems = $('.js-active-toggle-siblings-off');

  $elems.each(function(){
    $(this).on('click', function(){
      $(this).toggleClass('active').siblings().removeClass('active');
    });
  });
};

TJ.svgGlobal = function(){
  new Vue({
    	el: '#global-svg',
    	template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-arrow-down" viewBox="0 0 50 32"><title>arrow-down</title><path stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="6.4" fill="none" d="M4.571 4.571l20.571 20.571 20.571-20.571"></path></symbol><symbol id="icon-dish" viewBox="0 0 31 32"><title>dish</title><path fill="#a0a0a0" style="fill: var(--color1, #a0a0a0)" d="M30.509 10.082l-9.094 9.122-11.138-9.272 8.589-9.851 11.642 10.002z"></path><path fill="#e5e5e5" style="fill: var(--color2, #e5e5e5)" d="M31.014 14.549l-11.786 5.192-7.008-12.687 11.579-6.058 7.215 13.553z"></path><path fill="#8e8e8e" style="fill: var(--color3, #8e8e8e)" d="M24.265 20.939c2.978-5.204 1.174-11.837-4.030-14.816s-11.837-1.174-14.816 4.030-1.174 11.837 4.030 14.815c5.204 2.978 11.837 1.174 14.815-4.030z"></path><path fill="#e2e2e2" style="fill: var(--color4, #e2e2e2)" d="M6.475 27.688l5.43-12.165-0.677-0.326-6.17 11.814c-0.2 0.393-0.039 0.873 0.358 1.066 0.4 0.193 0.876 0.017 1.059-0.389z"></path><path fill="#f2f2f2" style="fill: var(--color5, #f2f2f2)" d="M14.806 14.636c0.873-1.812 0.528-3.789-0.772-4.415s-3.061 0.335-3.934 2.148c-0.873 1.812-0.528 3.789 0.772 4.415s3.061-0.335 3.934-2.148z"></path><path fill="#b3b3b3" style="fill: var(--color6, #b3b3b3)" opacity="0.2" d="M13.933 14.248c0.635-1.319 0.477-2.712-0.353-3.112s-2.018 0.345-2.654 1.663c-0.635 1.319-0.477 2.712 0.353 3.112s2.018-0.345 2.654-1.663z"></path><path fill="#e2e2e2" style="fill: var(--color4, #e2e2e2)" d="M25.465 30.811l-5.437-12.161-0.698 0.287 4.687 12.477c0.158 0.41 0.624 0.614 1.034 0.445 0.407-0.168 0.596-0.642 0.414-1.048z"></path><path fill="#f2f2f2" style="fill: var(--color5, #f2f2f2)" d="M19.256 13.869l1.020 2.471c0.070 0.172-0.011 0.365-0.182 0.435s-0.365-0.011-0.435-0.182l-1.154-2.79c-0.042-0.105-0.147-0.172-0.259-0.165-0.186 0.007-0.308 0.196-0.235 0.372l1.174 2.843c0.060 0.144-0.011 0.308-0.151 0.365l-0.109 0.046c-0.137 0.056-0.294-0.007-0.351-0.147l-1.16-2.808c-0.077-0.189-0.323-0.235-0.466-0.091-0.081 0.081-0.105 0.203-0.059 0.309l1.167 2.829c0.053 0.126-0.007 0.27-0.133 0.323l-0.161 0.067c-0.126 0.052-0.27-0.007-0.323-0.133l-1.017-2.468c-0.042-0.102-0.186-0.088-0.214 0.014-0.207 0.803-0.137 1.784 0.259 2.745 0.768 1.861 2.472 2.92 3.804 2.373 1.332-0.55 1.791-2.503 1.023-4.364-0.417-1.006-1.108-1.781-1.865-2.191-0.109-0.056-0.221 0.046-0.175 0.151z"></path></symbol><symbol id="icon-hamburger" viewBox="0 0 48 32"><title>hamburger</title><path fill="#575757" style="fill: var(--color7, #575757)" d="M0 32h48v-4h-48v4zM0 18h48v-4h-48v4zM0 0v4h48v-4h-48z"></path></symbol><symbol id="icon-rectangles" viewBox="0 0 34 32"><title>rectangles</title><path fill="#fff" style="fill: var(--color8, #fff)" d="M20.48 19.2v-6.4h-6.827v6.4h6.827z"></path><path fill="#fff" style="fill: var(--color8, #fff)" d="M20.48 32v-6.4h-6.827v6.4h6.827z"></path><path fill="#fff" style="fill: var(--color8, #fff)" d="M20.48 6.4v-6.4h-6.827v6.4h6.827z"></path><path fill="#fff" style="fill: var(--color8, #fff)" d="M6.827 19.2v-6.4h-6.827v6.4h6.827z"></path><path fill="#fff" style="fill: var(--color8, #fff)" d="M34.133 19.2v-6.4h-6.827v6.4h6.827z"></path><path fill="#fff" style="fill: var(--color8, #fff)" d="M6.827 32v-6.4h-6.827v6.4h6.827z"></path><path fill="#fff" style="fill: var(--color8, #fff)" d="M34.133 32v-6.4h-6.827v6.4h6.827z"></path><path fill="#fff" style="fill: var(--color8, #fff)" d="M6.827 6.4v-6.4h-6.827v6.4h6.827z"></path><path fill="#fff" style="fill: var(--color8, #fff)" d="M34.133 6.4v-6.4h-6.827v6.4h6.827z"></path></symbol><symbol id="icon-user" viewBox="0 0 32 32"><title>user</title><path stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="1.28" d="M16.020 29.865c-4.087 0-8.174 0.002-12.261-0.001-1.262-0.001-1.626-0.349-1.626-1.563-0.001-2.34 1.132-4.063 3.259-5.015 1.291-0.577 2.747-0.806 4.132-1.183 0.327-0.089 0.672-0.117 0.994-0.218 1.838-0.579 1.804-0.359 1.29-2.297-0.289-1.089-1.102-2.090-1.838-3.010-0.843-1.052-1.499-2.137-1.658-3.473-0.020-0.164-0.096-0.363-0.030-0.488 0.817-1.545 0.152-3.202 0.394-4.798 0.19-1.26 0.615-2.328 1.493-3.258 0.204-0.215 0.346-0.551 0.377-0.845 0.095-0.903 0.531-1.449 1.468-1.52 2.897-0.217 5.707 0.109 8.375 1.331 1.659 0.759 2.608 2.020 2.861 3.748 0.136 0.921 0.065 1.869 0.132 2.801 0.047 0.668 0.142 1.336 0.263 1.996 0.268 1.467-0.255 2.72-1.094 3.876-0.358 0.494-0.802 0.931-1.204 1.396-0.811 0.938-1.242 2.024-1.376 3.241-0.057 0.517 0.069 0.875 0.614 1.008 0.932 0.228 1.86 0.477 2.801 0.66 1.804 0.348 3.514 0.866 4.881 2.151 1.333 1.253 1.759 2.793 1.547 4.535-0.087 0.717-0.603 0.931-1.277 0.929-2.044-0.005-4.088-0.001-6.131-0.001-2.13 0-4.258-0.001-6.387-0.001zM11.74 3.439c0.485 1.031-0.124 1.495-0.653 2.060-0.427 0.455-0.884 1.031-0.977 1.607-0.187 1.161-0.183 2.359-0.164 3.541 0.011 0.649 0.29 1.29-0.302 1.861-0.127 0.123-0.12 0.508-0.023 0.7 0.456 0.902 0.837 1.88 1.48 2.643 1.243 1.473 2.194 3.005 2.202 4.979 0.005 1.109-0.177 1.507-1.277 1.854-1.099 0.347-2.234 0.601-3.369 0.824-1.408 0.278-2.76 0.663-3.84 1.633-1.028 0.923-1.558 2.047-1.367 3.451 0.199 0.038 0.308 0.077 0.417 0.077 8.030 0.005 16.061 0.004 24.091 0.016 0.55 0.001 0.786-0.294 0.653-0.708-0.265-0.824-0.496-1.724-1.016-2.39-1.029-1.322-2.623-1.74-4.229-2.077-1.214-0.255-2.416-0.568-3.606-0.916-0.727-0.213-1.024-0.74-1.040-1.517-0.042-2.005 0.761-3.649 2.124-5.077 0.788-0.825 1.429-1.722 1.577-2.869 0.034-0.255-0.054-0.527-0.098-0.789-0.085-0.497-0.235-0.99-0.258-1.49-0.051-1.125 0.038-2.261-0.079-3.378-0.124-1.182-0.745-2.11-1.88-2.687-1.533-0.78-3.166-1.21-4.873-1.332-1.109-0.078-2.228-0.014-3.491-0.014z"></path></symbol></defs></svg>'
    })
};


(function onPageReady () {
  TJ.svgGlobal();
  TJ.imgAdaptive();
  TJ.activeToggle();
  TJ.activeToggleSiblingsOff();
}());
