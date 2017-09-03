/*
jQWidgets v5.1.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(i){i.jqx.jqxWidget("jqxRating","",{}),i.extend(i.jqx._jqxRating.prototype,{defineInstance:function(){var t={count:5,disabled:!1,value:0,height:"auto",width:"auto",precision:1,singleVote:!1,itemHeight:"20",itemWidth:"20",_itemHeight:void 0,_itemWidth:void 0,_images:[],aria:{"aria-valuenow":{name:"value",type:"number"},"aria-disabled":{name:"disabled",type:"boolean"}},_events:["change"],_invalidArgumentExceptions:{invalidPrecision:"The value of the precision property is invalid!",invalidWidth:"Width you've entered is invalid!",invalidHeight:"Height you've entered is invalid!",invalidCount:"You've entered invalid value for the count property!",invalidValue:"You've entered invalid value property!"}};return this===i.jqx._jqxRating.prototype?t:(i.extend(!0,this,t),t)},createInstance:function(t){i.jqx.aria(this),this._createRating()},destroy:function(){this.host.remove()},val:function(i){return 0==arguments.length||"object"==typeof i?this.value:(this.value="string"==typeof i?parseInt(i):i,this.setValue(this.value),this.value)},_createRating:function(){this.host.css("display","none"),this.host.empty(),this._addInput(),this._validateProperties(),this._render(),this._performLayout(),this._removeEventHandlers(),this._addEventHandlers(),this.host.css("display","block"),this.host.addClass(this.toThemeProperty("jqx-widget")),this.disabled&&this.disable()},_addInput:function(){var t=this.host.attr("name");this.input=i("<input type='hidden'/>"),this.host.append(this.input),t&&this.input.attr("name",t),this.input.val(this.value.toString())},_render:function(){for(var t=1;t<=this.count;t++)this._images[t-1]=i('<div style="float:left;width:auto;height:auto; position: relative;"><div style="position:absolute;width:auto;height:auto;visibility:hidden;" class="jqx-rating-hoverWrapper"><div style="width:auto;height:auto;float:left;" class="'+this.toThemeProperty("jqx-rating-image-hover")+'"></div><div style="visibility:hidden;width:auto;height:auto;" class="'+this.toThemeProperty("jqx-rating-image-backward")+'"></div></div><div style="position:absolute;width:auto;height:auto;" class="jqx-rating-voteWrapper"><div style="width:auto;height:auto;float:left;" class="'+this.toThemeProperty("jqx-rating-image-default")+'"></div><div style="width:0;height:auto;float:left;" class="'+this.toThemeProperty("jqx-rating-image-backward")+'"></div></div></div>'),this.host.append(this._images[t-1])},_performLayout:function(){for(var i=1;i<=this.count;i++){var t=this._images[i-1].find(this.toThemeProperty(".jqx-rating-image-backward",!0)),e=this._images[i-1].find(this.toThemeProperty(".jqx-rating-image-default",!0)),a=this._images[i-1].find(this.toThemeProperty(".jqx-rating-image-hover",!0)),s=this._getImageName(e),h=this._getImageName(a),n=this._getImageName(t);e.css("background-image","none"),a.css("background-image","none"),t.css("background-image","none"),this._appendImage(a,h,i-1),this._appendImage(t,n,i-1),this._appendImage(e,s,i-1)}},resize:function(i,t){this.width=i,this.height=t,this._setControlSize(this.width,this.height)},_setControlSize:function(i,t){this.host.css("height",this.height),this.host.css("width",this.width),this.itemHeight&&"auto"!==this.itemHeight?this._itemHeight=parseInt(this.itemHeight):this._itemHeight=t,this.itemWidth&&"auto"!==this.itemWidth?this._itemWidth=parseInt(this.itemWidth):this._itemWidth=i},_appendImage:function(t,e,a){var s=this,h=i('<img style="-moz-user-select:-moz-none;-khtml-user-select: none;-webkit-user-select:none;user-select:none;" class="'+this.toThemeProperty("jqx-rating-image")+'" src="'+e+'" />');t.append(h);try{h.load(function(){s._initialized||(s._setControlSize(i(this).width(),i(this).height()),s._setValue(s.value,".jqx-rating-voteWrapper",".jqx-rating-image-default",".jqx-rating-image-backward"),s._initialized=!0),s._images[a].height(s._itemHeight),i(this).height(s._itemHeight),s._images[a].width(s._itemWidth),i(this).width(s._itemWidth)})}catch(t){h[0].onload=function(){s._initialized||(s._setControlSize(i(this).width(),i(this).height()),s._setValue(s.value,".jqx-rating-voteWrapper",".jqx-rating-image-default",".jqx-rating-image-backward"),s._initialized=!0),s._images[a].height(s._itemHeight),i(this).height(s._itemHeight),s._images[a].width(s._itemWidth),i(this).width(s._itemWidth)}}return h},_validateProperties:function(){try{if(this.precision<.001||this.precision>1)throw this._invalidArgumentExceptions.invalidPrecision;if("auto"!==this.height&&parseInt(this.height)<0)throw this._invalidArgumentExceptions.invalidHeight;if("auto"!==this.width&&parseInt(this.width)<0)throw this._invalidArgumentExceptions.invalidWidth;if(this.count<=0)throw this._invalidArgumentExceptions.invalidCount;if(this.value>this.count||this.value<0)throw this._invalidArgumentExceptions.invalidValue}catch(i){alert(i)}},_getImageIndex:function(i){for(var t=0;i!==this._images[t][0];)t++;return++t},_getRating:function(t,e){var a=this._getImageIndex(t);if(this.precision<1){for(var s=parseInt(e)-parseInt(i(t).position().left),h=this._itemWidth*this.precision,n=0;n<s;)n+=h;n>parseInt(this._itemWidth)-h&&(n=parseInt(this._itemWidth)),a-=1-n/i(t).width()}return a},_addEventHandlers:function(){for(var t=this,e=0;e<this.count;e++)i.jqx.mobile.isTouchDevice()||(this.addHandler(this._images[e],"mousemove",function(i){var e=t._getRating(this,i.pageX);t._setValue(e,".jqx-rating-hoverWrapper",".jqx-rating-image-hover",".jqx-rating-image-backward")}),this.addHandler(this._images[e],"mouseenter",function(i){for(var e=t._getImageIndex(this),a=0;a<e;a++)t._images[a].children(".jqx-rating-hoverWrapper").css("z-index","10"),t._images[a].children(".jqx-rating-voteWrapper").css("z-index","1"),t._images[a].children(".jqx-rating-hoverWrapper").css("visibility","visible")}),this.addHandler(this._images[e],"mouseleave",function(i){for(var e=t._getImageIndex(this),a=0;a<e;a++)t._images[a].children(".jqx-rating-voteWrapper").css("z-index","10"),t._images[a].children(".jqx-rating-hoverWrapper").css("z-index","1"),t._images[a].children(".jqx-rating-hoverWrapper").css("visibility","hidden")})),this.addHandler(this._images[e],"click",function(i){var e=t._getRating(this,i.pageX);t._setValue(e,".jqx-rating-voteWrapper",".jqx-rating-image-default",".jqx-rating-image-backward"),t.singleVote&&t.disable(),i.stopPropagation(),t._raiseEvent(0,e)}),this.addHandler(this._images[e],"dragstart",function(i){return!1})},_removeEventHandlers:function(){for(var i=0;i<this.count;i++)this.removeHandler(this._images[i],"mousemove"),this.removeHandler(this._images[i],"mouseenter"),this.removeHandler(this._images[i],"mouseleave"),this.removeHandler(this._images[i],"click"),this.removeHandler(this._images[i],"dragstart")},_getImageName:function(i){var t=i.css("background-image");return t=t.replace('url("',""),t=t.replace('")',""),t=t.replace("url(",""),t=t.replace(")","")},_setValue:function(t,e,a,s){for(var h=1;h<=this.count;h++){var n=1,r=this._images[h-1].children(e),o=r.children(a),d=r.children(s);h>t&&(n=Math.abs(h-t)<1?1-Math.abs(h-t):0),o.width(this._itemWidth*n),d.width(this._itemWidth-parseInt(o.width())),r.children(this.toThemeProperty(s)).children(0).css("margin-left",-this._itemWidth*n+"px")}i.jqx.aria(this,"aria-valuenow",t)},_raiseEvent:function(t,e){var a=new i.Event(this._events[t]);return a.owner=this,a.value=e,a.oldvalue=this.value,this.value=e,this.input&&this.input.val(this.value.toString()),this.host.trigger(a)},setValue:function(i){this._setValue(i,".jqx-rating-voteWrapper",".jqx-rating-image-default",".jqx-rating-image-backward"),this.value=i,this._raiseEvent(0,this.value)},getValue:function(){return this.value},disable:function(){this._removeEventHandlers(),this.disabled=!0,i.jqx.aria(this,"aria-disabled",!0)},enable:function(){this._removeEventHandlers(),this._addEventHandlers(),this.disabled=!1,i.jqx.aria(this,"aria-disabled",!1)},propertyChangedHandler:function(i,t,e,a){"disabled"!==t?"value"===t?i.setValue(a):i._createRating():a?this.disable():this.enable()}})}(jqxBaseFramework);

