self.webpackChunk([4],{50:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return t}));var o=n(0);class t extends o.a{static getConfig(){return{className:"Neo.draggable.DropZone",ntype:"dropzone",owner:null}}constructor(e){super(e);let r=this,n=r.owner,o=n.domListeners;o.push({drop:r.onDrop,scope:r},{"drop:enter":r.onDropEnter,scope:r},{"drop:leave":r.onDropLeave,scope:r}),n.domListeners=o}fireOwnerEvent(e,r){this.owner.fire(e,this.getDragData(r.dragZoneId))}getDragData(e){let r=Neo.get(e);return r?r.data:null}onDrop(e){this.fireOwnerEvent("drop",e)}onDropEnter(e){this.fireOwnerEvent("drop:enter",e)}onDropLeave(e){this.fireOwnerEvent("drop:leave",e)}}Neo.applyClassConfig(t)}});