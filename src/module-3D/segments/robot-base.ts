import * as THREE from 'three';
import { Segment } from './segment';

export class RobotBase extends Segment {
  constructor() {
    super();
    const radius = 10;
    const height = 10;
    const geometry = new THREE.CylinderGeometry(radius, radius, height, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.setY(5);


    this.add(cylinder);
  }

  animate(position: number, rotation: number) {
    // Implement animation logic for the base segment
    // ...
  }
}



