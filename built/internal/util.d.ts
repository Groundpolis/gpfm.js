import { MfmNode } from '../node';
export declare function mergeText(nodes: (MfmNode | string)[]): MfmNode[];
export declare function stringifyNode(node: MfmNode): string;
export declare function stringifyTree(nodes: MfmNode[]): string;
export declare function inspectOne(node: MfmNode, action: (node: MfmNode) => void): void;
export declare function setConsumeCount(count: number): void;
export declare function consumeDynamically(): boolean;
