import { Segment } from './segment';
import { createBox, createCylinder } from '../utils/create-objects';

export class RobotBase extends Segment {
  longitude: number = 16.5;
  lowerY: number= 0;

  constructor(color: number) {
    super();
    
    const baseCylinderMesh = createCylinder(10, 10, color);
    baseCylinderMesh.position.y = 5;

    const boxMesh = createBox(3, 7, 6, color);
    boxMesh.position.y = 13.5 ; // Position the box on top of the cylinder

    const topCylinderMesh = createCylinder(3, 3, color);
    topCylinderMesh.position.y = 16.5;
    topCylinderMesh.rotation.z = Math.PI / 2; 

    const topAxisCylinderMesh = createCylinder(1, 13, 0xaaaaaa, true);
    topAxisCylinderMesh.position.y = 16.5;
    topAxisCylinderMesh.rotation.z = Math.PI / 2; 

    this.add(baseCylinderMesh);
    this.add(boxMesh);
    this.add(topCylinderMesh);
    this.add(topAxisCylinderMesh);
    
  }

  animate(position: number, rotation: number) {
    
  }

}



