"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEXT = exports.FN = exports.LINK = exports.N_URL = exports.HASHTAG = exports.MENTION = exports.MATH_INLINE = exports.INLINE_CODE = exports.STRIKE = exports.ITALIC = exports.SMALL = exports.BOLD = exports.EMOJI_CODE = exports.UNI_EMOJI = exports.SUB = exports.SUP = exports.MARQUEE = exports.RIGHT = exports.CENTER = exports.MATH_BLOCK = exports.CODE_BLOCK = exports.SEARCH = exports.QUOTE = exports.isMfmBlock = void 0;
const blockTypes = ['quote', 'search', 'blockCode', 'mathBlock', 'center'];
function isMfmBlock(node) {
    return blockTypes.includes(node.type);
}
exports.isMfmBlock = isMfmBlock;
const QUOTE = (children) => { return { type: 'quote', children }; };
exports.QUOTE = QUOTE;
const SEARCH = (query, content) => { return { type: 'search', props: { query, content } }; };
exports.SEARCH = SEARCH;
const CODE_BLOCK = (code, lang) => { return { type: 'blockCode', props: { code, lang } }; };
exports.CODE_BLOCK = CODE_BLOCK;
const MATH_BLOCK = (formula) => { return { type: 'mathBlock', props: { formula } }; };
exports.MATH_BLOCK = MATH_BLOCK;
const CENTER = (children) => { return { type: 'center', children }; };
exports.CENTER = CENTER;
const RIGHT = (children) => { return { type: 'right', children }; };
exports.RIGHT = RIGHT;
const MARQUEE = (children) => { return { type: 'marquee', children }; };
exports.MARQUEE = MARQUEE;
const SUP = (children) => { return { type: 'sup', children }; };
exports.SUP = SUP;
const SUB = (children) => { return { type: 'sub', children }; };
exports.SUB = SUB;
const UNI_EMOJI = (value) => { return { type: 'unicodeEmoji', props: { emoji: value } }; };
exports.UNI_EMOJI = UNI_EMOJI;
const EMOJI_CODE = (name) => { return { type: 'emojiCode', props: { name: name } }; };
exports.EMOJI_CODE = EMOJI_CODE;
const BOLD = (children) => { return { type: 'bold', children }; };
exports.BOLD = BOLD;
const SMALL = (children) => { return { type: 'small', children }; };
exports.SMALL = SMALL;
const ITALIC = (children) => { return { type: 'italic', children }; };
exports.ITALIC = ITALIC;
const STRIKE = (children) => { return { type: 'strike', children }; };
exports.STRIKE = STRIKE;
const INLINE_CODE = (code) => { return { type: 'inlineCode', props: { code } }; };
exports.INLINE_CODE = INLINE_CODE;
const MATH_INLINE = (formula) => { return { type: 'mathInline', props: { formula } }; };
exports.MATH_INLINE = MATH_INLINE;
const MENTION = (username, host, acct) => { return { type: 'mention', props: { username, host, acct } }; };
exports.MENTION = MENTION;
const HASHTAG = (value) => { return { type: 'hashtag', props: { hashtag: value } }; };
exports.HASHTAG = HASHTAG;
const N_URL = (value, brackets) => { return { type: 'url', props: { url: value, brackets } }; };
exports.N_URL = N_URL;
const LINK = (silent, url, children) => { return { type: 'link', props: { silent, url }, children }; };
exports.LINK = LINK;
const FN = (name, args, children) => { return { type: 'fn', props: { name, args }, children }; };
exports.FN = FN;
const TEXT = (value) => { return { type: 'text', props: { text: value } }; };
exports.TEXT = TEXT;