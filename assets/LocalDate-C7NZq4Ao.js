import{c as d}from"./index-DfxT8QL_.js";import{j as h}from"./router-lC6BPPbX.js";/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],p=d("external-link",u);function M({date:o,className:r,vr:i}){const s=new Date(o),c=new Date,e=(s.getTime()-c.getTime())/1e3-3600,l=new Intl.RelativeTimeFormat(i,{numeric:"auto"});let t,a;const n=Math.abs(e);return n<60?(t=Math.round(e),a="second"):n<3600?(t=Math.round(e/60),a="minute"):n<86400?(t=Math.round(e/3600),a="hour"):n<2592e3?(t=Math.round(e/86400),a="day"):n<31536e3?(t=Math.round(e/2592e3),a="month"):(t=Math.round(e/31536e3),a="year"),h.jsx("time",{dateTime:o,className:r,children:l.format(t,a).replace(/^قبل\s/,"منذ ")})}export{p as E,M as L};
