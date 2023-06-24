import { Segment } from './segment';
import { createCylinder } from '../utils/create-objects';

export class LowerArm extends Segment {

  constructor(color: number) {
    super();

    const jointCylinder = createCylinder(3, 12, color);
    jointCylinder.rotation.z = Math.PI / 2;
    jointCylinder.position.y = - 10;

    const axisCylinder = createCylinder(1, 14, color, true);
    axisCylinder.rotation.z = Math.PI / 2;
    axisCylinder.position.y = - 10;

    const LateralCylinder = createCylinder(0.8, 20, 0xaaaaaa, true);
    const LateralCylinder2 = LateralCylinder.clone();
    LateralCylinder.position.x = 2
    LateralCylinder2.position.x = - 2;
    

    this.add(jointCylinder);
    this.add(axisCylinder);
    this.add(LateralCylinder);
    this.add(LateralCylinder2);

    this.position.y = 54.5;
  }

  animate(position: number, rotation: number) {
    
  }
}