import { Segment } from './segment';
import { createCylinder } from '../utils/create-objects';

export class LowerArm extends Segment {

  constructor(color: number) {
    super();

    const jointCylinder = createCylinder(4, 3, color);
    const jointCylinder2 = jointCylinder.clone();
    const jointCylinder3 =  createCylinder(5, 3, color);

    jointCylinder.position.x = 4
    jointCylinder.rotation.z = Math.PI / 2;
    jointCylinder.position.y = - 10;

    jointCylinder2.position.x = - 4
    jointCylinder2.rotation.z = Math.PI / 2;
    jointCylinder2.position.y = - 10;

    jointCylinder3.rotation.z = Math.PI / 2;
    jointCylinder3.position.y = - 10;

    const axisCylinder = createCylinder(1, 14, color, true);
    axisCylinder.rotation.z = Math.PI / 2;
    axisCylinder.position.y = - 10;

    const LateralCylinder = createCylinder(1.2, 25, 0xaaaaaa, true);
  
    this.add(jointCylinder);
    this.add(jointCylinder2);
    this.add(jointCylinder3);
    this.add(axisCylinder);
    this.add(LateralCylinder);
 
    this.position.y = 54.5;
  }

  animate(position: number, rotation: number) {
    
  }
}