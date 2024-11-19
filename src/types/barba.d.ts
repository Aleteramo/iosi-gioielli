declare module '@barba/core' {
  interface IBarbaOptions {
    transitions?: Array<{
      name?: string;
      leave?: (data: { current: { container: HTMLElement } }) => Promise<any>;
      enter?: (data: { next: { container: HTMLElement } }) => Promise<any>;
    }>;
    views?: Array<{
      namespace: string;
      beforeEnter?: () => void;
    }>;
  }

  interface Barba {
    init: (options: IBarbaOptions) => void;
    destroy: () => void;
  }

  const barba: Barba;
  export default barba;
}
