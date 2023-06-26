import { Segment } from './segment';
import { createBox, createCylinder } from '../utils/create-objects';

export class Grip extends Segment {
  lowerY: number= 0;
  longitude: number= 0;

  constructor(color: number) {
    super();

    const jointCylinder = createCylinder(3, 6, color);
    jointCylinder.rotation.z = Math.PI / 2;
    
    const LateralCylinder = createCylinder(0.8, 5, 0xaaaaaa, true);
    LateralCylinder.position.y = 5;

    const axisCylinder = createCylinder(1, 8, color, true);
    axisCylinder.rotation.z = Math.PI / 2;

    const gripBox1 = createBox(15, 3, 3, color);
    gripBox1.position.y = 8;

    const gripBox2 = createBox(1, 10, 3, color);
    gripBox2.position.y = 13;
    gripBox2.position.x = 5;
    const gripBox3 = createBox(1, 10, 3, color);
    gripBox3.position.x = -5;
    gripBox3.position.y = 13;


    this.add(jointCylinder);
    this.add(LateralCylinder);
    this.add(axisCylinder);
    this.add(gripBox1);
    this.add(gripBox2);
    this.add(gripBox3);
 
    this.position.y = 72.5;
  }

  animate(position: number, rotation: number) {
    
  }
}