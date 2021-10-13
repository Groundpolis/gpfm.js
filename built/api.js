"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract = exports.inspect = exports.toString = exports.parsePlain = exports.parse = void 0;
const util_1 = require("./internal/util");
const parser = require('./internal/parser');
function parse(input, opts = {}) {
    const nodes = parser.parse(input, { startRule: 'fullParser', fnNameList: opts.fnNameList });
    return nodes;
}
exports.parse = parse;
function parsePlain(input) {
    const nodes = parser.parse(input, { startRule: 'plainParser' });
    return nodes;
}
exports.parsePlain = parsePlain;
function toString(node) {
    if (Array.isArray(node)) {
        return util_1.stringifyTree(node);
    }
    else {
        return util_1.stringifyNode(node);
    }
}
exports.toString = toString;
function inspect(node, action) {
    if (Array.isArray(node)) {
        for (const n of node) {
            util_1.inspectOne(n, action);
        }
    }
    else {
        util_1.inspectOne(node, action);
    }
}
exports.inspect = inspect;
function extract(nodes, predicate) {
    const dest = [];
    inspect(nodes, (node) => {
        if (predicate(node)) {
            dest.push(node);
        }
    });
    return dest;
}
exports.extract = extract;
