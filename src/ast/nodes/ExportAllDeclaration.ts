import type MagicString from 'magic-string';
import type { NodeRenderOptions, RenderOptions } from '../../utils/renderHelpers';
import type Identifier from './Identifier';
import type Literal from './Literal';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';

export default class ExportAllDeclaration extends NodeBase {
	declare exported: Identifier | null;
	declare needsBoundaries: true;
	declare source: Literal<string>;
	declare type: NodeType.tExportAllDeclaration;

	hasEffects(): boolean {
		return false;
	}

	initialise(): void {
		this.context.addExport(this);
	}

	render(code: MagicString, _options: RenderOptions, nodeRenderOptions?: NodeRenderOptions): void {
		code.remove(nodeRenderOptions!.start!, nodeRenderOptions!.end!);
	}
}

ExportAllDeclaration.prototype.needsBoundaries = true;
