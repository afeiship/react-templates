export interface TemplateArgs {
  item: any;
  index: number;
}


export interface TreeTemplateArgs {
  item: any;
  index: number;
  independent: boolean;
}

export type TreeWalkCallback = () => any;
