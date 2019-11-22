/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  GameInstance,
} from './components/models';
import {
  Game,
} from 'phaser';

export namespace Components {
  interface IonPhaser {
    /**
    * Destroy the Phaser game instance
    */
    'destroy': () => Promise<void>;
    /**
    * The configuration of the game
    */
    'game': GameInstance;
    /**
    * Get the Phaser game instance
    */
    'getInstance': () => Promise<Game>;
    /**
    * To initialize the plugin manually
    */
    'initialize': boolean;
  }
}

declare global {


  interface HTMLIonPhaserElement extends Components.IonPhaser, HTMLStencilElement {}
  var HTMLIonPhaserElement: {
    prototype: HTMLIonPhaserElement;
    new (): HTMLIonPhaserElement;
  };
  interface HTMLElementTagNameMap {
    'ion-phaser': HTMLIonPhaserElement;
  }
}

declare namespace LocalJSX {
  interface IonPhaser {
    /**
    * The configuration of the game
    */
    'game'?: GameInstance;
    /**
    * To initialize the plugin manually
    */
    'initialize'?: boolean;
  }

  interface IntrinsicElements {
    'ion-phaser': IonPhaser;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ion-phaser': LocalJSX.IonPhaser & JSXBase.HTMLAttributes<HTMLIonPhaserElement>;
    }
  }
}


