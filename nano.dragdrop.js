/*
 *  nano Drag and Drop plugin v1.0
 *  http://nanojs.org/plugins/dragdrop
 *
 *  Copyright (c) 2008-2015 James Watts
 *  https://github.com/jameswatts
 *
 *  This is FREE software, licensed under the GPL
 *  http://www.gnu.org/licenses/gpl.html
 */

if (nano) {
	nano.plugin({
		drag: function _drag(e) {
			e = (window.event)? window.event : e;
			nano.dragdrop.select(this, 'drag', this.get('nano_drag_limit'), e);
			if (typeof this.node.onselect === 'function') this.node.onselect.call(this.node, e);
		},
		resize: function _resize(e) {
			e = (window.event)? window.event : e;
			nano.dragdrop.select(this, 'resize', this.get('nano_drag_limit'), e);
			if (typeof this.node.onselect === 'function') this.node.onselect.call(this.node, e);
		},
		drop: function _drop(e) {
			nano.dragdrop.drop(this);
			if (typeof this.node.ondrop === 'function') this.node.ondrop.call(this.node, (window.event)? window.event : e);
		}
	},
	function() {
		this.reg({
			area: function(obj) {
				this.attr({nano_area: obj});
			},
			scale: function(obj) {
				this.attr({nano_scale: obj});
			},
			limit: function(val) {
				this.attr({nano_limit: val});
			}
		});
		this.dragdrop = {
			node: null,
			select: function _select(node, type, limit, evt) {
				node = (!node.nano)? nano(node) : node;
				var x = node.x(), y = node.y();
				node.style({
					position: 'absolute',
					margin: '0px'
				});
				node.moveTo(x, y);
				node.attr({
					nano_drag_x: evt.clientX,
					nano_drag_y: evt.clientY,
					nano_drag_w: evt.clientX-node.x(),
					nano_drag_h: evt.clientY-node.y(),
					nano_drag_limit: limit || 'none',
					nano_drag_callback: ((type === 'resize')? function(e) { nano.dragdrop.resize(this, e); } : function(e) { nano.dragdrop.drag(this, e); })
				});
				nano.dragdrop.node = node;
				window.onmousemove = function(e) { nano.dragdrop.node.node.nano_drag_callback((window.event)? window.event : e); };
				return node;
			},
			drag: function _drag(node, evt) {
				node = (!node.nano)? nano(node) : node;
				var x = evt.clientX, y = evt.clientY;
				node.moveTo(x-node.node.nano_drag_w, y-node.node.nano_drag_h);
				node.attr({
					nano_drag_x: x,
					nano_drag_y: y
				});
				if (typeof node.node.ondrag === 'function') node.node.ondrag.call(node.node, e);
				return node;
			},
			resize: function _resize(node, evt) {
				node = (!node.nano)? nano(node) : node;
				var x = evt.clientX, y = evt.clientY;
				node.resizeBy(x-node.node.nano_drag_x, y-node.node.nano_drag_y);
				node.attr({
					nano_drag_x: x,
					nano_drag_y: y
				});
				if (typeof node.node.onresize === 'function') node.node.onresize.call(node.node, e);
				return node;
			},
			drop: function _drop(node) {
				node = (!node.nano)? nano(node) : node;
				delete node.node.nano_drag_callback;
				window.onmousemove = null;
				return node;
			}
		};
	});
}
