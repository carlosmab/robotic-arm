import * as THREE from 'three';

export abstract class Segment extends THREE.Object3D {
  abstract animate(position: number, rotation: number): void;
}