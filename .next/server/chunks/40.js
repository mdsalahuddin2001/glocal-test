exports.id = 40;
exports.ids = [40];
exports.modules = {

/***/ 9188:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 3124:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/popover/popover.js + 7 modules
var popover = __webpack_require__(1067);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 5 modules
var transition = __webpack_require__(5113);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(9406);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/components/Logo.jsx




function Logo({ className }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: className,
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: "/assets/logo.svg",
            width: 200,
            height: 52.6,
            alt: "logo"
        })
    });
}
/* harmony default export */ const components_Logo = (Logo);

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/menu/menu.js + 5 modules
var menu = __webpack_require__(6346);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/20/solid/esm/ChevronDownIcon.js
var ChevronDownIcon = __webpack_require__(6730);
;// CONCATENATED MODULE: ./src/app/components/AboutDropdown.jsx






function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function AboutDropdown() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v, {
        as: "div",
        className: "relative inline-block text-left",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v.Button, {
                    className: "inline-flex  items-center gap-x-1   text-[16px] font-medium",
                    children: [
                        "ABOUT US",
                        /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon/* default */.Z, {
                            className: "-mr-1 h-5 w-5 text-white mt-.5",
                            "aria-hidden": "true"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                as: react_.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu */.v.Items, {
                    className: "aboutDropdownContent absolute left-0 z-10 mt-4 w-56 origin-top-left rounded-[9px] bg-white/80  ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "py-1 divide-y divide-black/10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu */.v.Item, {
                                children: ({ active })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#about",
                                        className: classNames(active ? " text-primary/80" : "text-primary", "block px-4 py-2   text-[16px] "),
                                        children: "About Glocal"
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu */.v.Item, {
                                children: ({ active })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#our-team",
                                        className: classNames(active ? " text-primary/80" : "text-primary", "block px-4 py-2   text-[16px]"),
                                        children: "Our Team"
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu */.v.Item, {
                                children: ({ active })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#Our-Philosophy",
                                        className: classNames(active ? " text-primary/80" : "text-primary", "block px-4 py-2   text-[16px]"),
                                        children: "Our Philosophy"
                                    })
                            })
                        ]
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/utils/cn.js
var cn = __webpack_require__(9983);
;// CONCATENATED MODULE: ./src/app/components/Navbar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









function MobileNavLink({ href, children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J.Button, {
        as: (link_default()),
        href: href,
        className: "block w-full p-2  text-sm",
        children: children
    });
}
function MobileNavIcon({ open }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        className: "h-3.5 w-3.5 overflow-visible stroke-white/90 ",
        fill: "none",
        strokeWidth: 2,
        strokeLinecap: "round",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 1H14M0 7H14M0 13H14",
                className: (0,clsx/* default */.Z)("origin-center transition", open && "scale-90 opacity-0")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2 2L12 12M12 2L2 12",
                className: (0,clsx/* default */.Z)("origin-center transition", !open && "scale-90 opacity-0")
            })
        ]
    });
}
function MobileNavigation() {
    const [isAboutShow, setIsAboutShow] = (0,react_.useState)(false);
    const toggleAboutHandler = ()=>{
        setIsAboutShow(!isAboutShow);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover */.J, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J.Button, {
                className: "relative z-10 flex h-8 w-8 items-center justify-center focus:outline-none",
                "aria-label": "Toggle Navigation",
                children: ({ open })=>/*#__PURE__*/ jsx_runtime_.jsx(MobileNavIcon, {
                        open: open
                    })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(transition/* Transition */.u.Root, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                        as: react_.Fragment,
                        enter: "duration-150 ease-out",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "duration-150 ease-in",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J.Overlay, {
                            className: "fixed inset-0 h-screen"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                        as: react_.Fragment,
                        enter: "duration-150 ease-out",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "duration-100 ease-in",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover */.J.Panel, {
                            as: "div",
                            className: "absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-primary backdrop-blur-md p-4 text-lg tracking-tight text-[#fff] shadow-[rgba(0,0,0,0.4)_0px_8px_24px] ring-1 ring-primary mx-3 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(MobileNavLink, {
                                    href: "/",
                                    children: "HOME"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "  text-sm p-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center",
                                                onClick: toggleAboutHandler,
                                                children: [
                                                    "ABOUT US",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon/* default */.Z, {
                                                        className: "-mr-1 h-5 w-5 text-white mt-.5",
                                                        "aria-hidden": "true"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (0,clsx/* default */.Z)(!isAboutShow ? "h-0 overflow-hidden opacity-0" : "h-28 opacity-100", "transition-all duration-500"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(MobileNavLink, {
                                                        href: "/#about",
                                                        children: " About Glocal"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(MobileNavLink, {
                                                        href: "/#our-team",
                                                        children: " Our Team"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(MobileNavLink, {
                                                        href: "/#Our-Philosophy",
                                                        children: "Our Philosophy"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MobileNavLink, {
                                    href: "/#services",
                                    children: "OUR SERVICES"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MobileNavLink, {
                                    href: "/portfolio",
                                    children: "PORTFOLIO"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MobileNavLink, {
                                    href: "/contact",
                                    children: "CONTACT"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function Navbar({ isHome, isContact }) {
    const navRef = (0,react_.useRef)();
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            const navEl = navRef?.current;
            if (window.scrollY > 180) {
                navEl?.classList.add("sticky");
            } else if (window.scrollY < 50) {
                navRef?.current?.classList.remove("sticky");
                navRef?.current?.classList.add("navbar-appear");
            }
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        ref: navRef,
        className: (0,cn.cn)(isContact ? "border-b border-white/[24%]" : "", "absolute top-0 inset-x-0 max-lg:py-2 lg:min-h-[113px] my-4 md:my-8  flex flex-col items-center justify-center transition-[transform,opacity] duration-500 z-[999]"),
        id: "navbar",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (0,cn.cn)(isHome ? "md:justify-center md:items-center justify-between sm:justify-between" : "space-x-16 lg:space-x-[185px]", "container flex  my-5 nav-content max-md:justify-between"),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {
                    className: (0,cn.cn)(isHome ? "hidden" : "", "logo -mt-8 pt-4 max-md:hidden")
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "  text-[16px] hidden  font-medium md:flex justify-between md:gap-5 lg:gap-[56px] items-center  text-[#FFF] whitespace-nowrap",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "HOME"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(AboutDropdown, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#services",
                                children: "OUR SERVICES"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/portfolio",
                                children: "PORTFOLIO"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact",
                                children: "CONTACT"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {
                    className: "md:hidden max-w-[100px] !ml-0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "-mr-1 md:hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(MobileNavigation, {})
                })
            ]
        })
    });
}
/* harmony default export */ const components_Navbar = (Navbar);


/***/ }),

/***/ 9983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9406);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9610);


// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
const cn = (...classes)=>(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(...classes));


/***/ }),

/***/ 1579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4178);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2947);




function Logo({ className }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: className,
        href: "/",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/assets/logo.svg",
            width: 200,
            height: 52.6,
            alt: "logo"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 2590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\MD-SALAHUDDIN\Desktop\glocal-update\src\app\components\Navbar.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/components/CopyRight.jsx



function CopyRight() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " font-Roboto text-[14px] font-normal md:leading-[21px] text-[#fff] flex flex-col md:flex-row  justify-evenly lg:justify-center items-center  pt-[32px] md:space-x-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "max-md:order-2 max-md:mt-2",
                    children: "2023 Glocal. All right reserved."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex space-x-4 items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "underline",
                            children: "Privacy Policy"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "underline",
                            children: "Terms of Service"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "underline",
                            children: "Cookies Settings"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const components_CopyRight = (CopyRight);

// EXTERNAL MODULE: ./src/app/components/Logo.jsx
var Logo = __webpack_require__(1579);
;// CONCATENATED MODULE: ./src/app/components/Footer.jsx






function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "bg-primary",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " lg:container py-7 px-0  md:py-12 lg:py-[76px]",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "flex flex-col lg:flex-row xl:justify-between items-center  pb-[44px] gap-3 md:gap-7 xl:gap-[32px] ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "font-Roboto text-sm md:text-[16px] font-semibold  flex  justify-between items-center gap-2 md:gap-5  text-[#FFF] xl:gap-[32px]  leading-[24px]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#about",
                                        children: "About Glocal"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#services",
                                        children: "Our Services"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/portfolio",
                                        children: "Portfolio"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact",
                                        children: "Contact"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between items-center gap-[12px]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/assets/whatsapp.svg",
                                        width: 24,
                                        height: 24,
                                        alt: "no image",
                                        className: "w-[70%] md:w-full"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-[16px] text-[#FFF]  font-semibold",
                                    children: "+880 - 1711123123"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                /*#__PURE__*/ jsx_runtime_.jsx(components_CopyRight, {})
            ]
        })
    });
}
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\utils\\fonts.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_utils_fonts_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(522);
var target_path_src_utils_fonts_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_utils_fonts_js_import_Inter_arguments_subsets_latin_variableName_inter_);
;// CONCATENATED MODULE: ./src/app/layout.js




const metadata = {
    title: "Glocal",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: "scroll-smooth",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            "cz-shortcut-listen": "true",
            className: (target_path_src_utils_fonts_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"453x190"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;