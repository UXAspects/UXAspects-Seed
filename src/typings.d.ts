/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface NavigationMenuService {
  show(): void;
  hide(): void;
  visible(): boolean;
  collapseAtWidth(): number;
  setCollapseAtWidth(width: number): void;
  setDefaultCollapseAtWidth(): void;
}