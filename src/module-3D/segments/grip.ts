import { Segment } from './segment';
import { createCylinder } from '../utils/create-objects';

export class Grip extends Segment {

  constructor(color: number) {
    super();

    const jointCylinder = createCylinder(3, 6, color);
    jointCylinder.rotation.z = Math.PI / 2;
    jointCylinder.position.y = - 3;
    
    const LateralCylinder = createCylinder(0.8, 5, 0xaaaaaa, true);
    LateralCylinder.position.y = 2.5;

    const axisCylinder = createCylinder(1, 8, color, true);
    axisCylinder.rotation.z = Math.PI / 2;
    axisCylinder.position.y = - 3;

    this.add(jointCylinder);
    this.add(LateralCylinder);
    this.add(axisCylinder);
 
    this.position.y = 72.5;
  }

  animate(position: number, rotation: number) {
    
  }
}