/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare namespace jasmine {
  interface Matchers<T> {
    toHaveCssClass(expected: any): boolean;
  }
}

declare var G2: any;
declare var DataSet: any;
declare var Slider: any;
