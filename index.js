/* ------------------------------------------------------------------
* node-una-decoder - index.js
*
* Copyright (c) 2018, Futomi Hatano, All rights reserved.
* Released under the MIT license
* Date: 2018-03-14
* ---------------------------------------------------------------- */
'use strict';

const UnaDecoder = function() {};

UnaDecoder.prototype.decode = function(hex, text_name_list) {
	if(!text_name_list || !Array.isArray(text_name_list)) {
		text_name_list = [];
	}
	let dbuf = Buffer.from(hex, 'hex');
	let dlen = dbuf.length;
	if(dlen === 0 || dlen > 12 || dlen % 4 !== 0) {
		return null;
	}
	let res = {}
	for(let i=0; i<dlen; i+=4) {
		let name = this._decodeText(dbuf.readUInt16LE(i));
		let value = dbuf.readUInt16LE(i+2);
		if(text_name_list.indexOf(name) >= 0) {
			value = this._decodeText(value);
		} else {
			value = value / 10;
		}
		res[name] = value;
	}
	return res;
};

UnaDecoder.prototype._decodeText = function(n) {
	let chars = [
		(n & 0b0111110000000000) >> 10,
		(n & 0b0000001111100000) >> 5,
		(n & 0b0000000000011111)
	];
	let txt = '';
	let code_offset = 'a'.charCodeAt(0) - 1;
	chars.forEach((c, i) => {
		if(c >= 1 && c <= 26) {
			txt += String.fromCharCode(code_offset + c);
		} else if(c >= 27 && c <= 36) {
			txt += (c - 27).toString();
		}
	});
	return txt;
};

module.exports = new UnaDecoder();