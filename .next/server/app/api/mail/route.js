"use strict";
(() => {
var exports = {};
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 2081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 3663:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 1808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 4404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 1371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/mail/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-request.js
var next_request = __webpack_require__(5602);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: ./node_modules/nodemailer/lib/nodemailer.js
var nodemailer = __webpack_require__(4098);
;// CONCATENATED MODULE: ./src/app/api/mail/route.js



// export async function POST(req) {
//   const { body } = req;
//   var transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });
//   var mailOptions = {
//     from: body.email,
//     to: process.env.MAIL_TO,
//     subject: "Contact Email",
//     text: body.message,
//     html: `<h4>Name : ${body.name}</h5> <p>Message : ${body.message}</p>`,
//   };
//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       return new NextResponse.json(
//         JSON.stringify({ message: "Something went wrong!" })
//       );
//     } else {
//       return new NextResponse.json(JSON.stringify({ message: "success!" }));
//     }
//   });
// }
async function POST(request) {
    const { name, email, message } = await request.json();
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });
    console.log(email);
    var mailOptions = {
        from: email,
        to: process.env.MAIL_TO,
        subject: "Contact Email",
        text: message,
        html: `<h4>Name : ${name}</h5> <p>Message : ${message} email:${email}</p>`
    };
    try {
        await transporter.sendMail(mailOptions);
        return new next_response/* default */.Z(JSON.stringify({
            success: "true",
            messsage: "Successfully subitted."
        }), {
            status: 200,
            statusText: "Success",
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        return new next_response/* default */.Z(JSON.stringify({
            success: "true",
            messsage: "Successfully subitted."
        }), {
            status: 200,
            statusText: "Success",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fmail%2Froute&name=app%2Fapi%2Fmail%2Froute&pagePath=private-next-app-dir%2Fapi%2Fmail%2Froute.js&appDir=C%3A%5CUsers%5CMD-SALAHUDDIN%5CDesktop%5Cglocal-update%5Csrc%5Capp&appPaths=%2Fapi%2Fmail%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/mail/route",
        pathname: "/api/mail",
        filename: "route",
        bundlePath: "app/api/mail/route"
    },
    resolvedPagePath: "C:\\Users\\MD-SALAHUDDIN\\Desktop\\glocal-update\\src\\app\\api\\mail\\route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/mail/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,671], () => (__webpack_exec__(1371)));
module.exports = __webpack_exports__;

})();