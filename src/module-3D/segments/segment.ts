import * as THREE from 'three';

export abstract class Segment extends THREE.Object3D {
  abstract longitude: number;
  abstract animate(position: number, rotation: number): void;

  rotate = (rotation: number, offsetX: number = 0, offsetY: number = 0) =>{
    this.rotation.x = rotation;
    if (offsetX > 0) {
      this.position.x = offsetX;
    }
    if (offsetY > 0) {
      this.position.y = offsetY;
    }
  }

  addChild = (child: Segment) => {
    child.position.y = this.longitude;
    this.add(child);
  }
}