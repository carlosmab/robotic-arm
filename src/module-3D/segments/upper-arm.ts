import { Segment } from './segment';
import { createCylinder } from '../utils/create-objects';

export class UpperArm extends Segment {
  longitude: number =30;
  lowerY: number = -15;

  constructor(color: number) {
    super();

    const jointCylinder = createCylinder(5, 2.5, color);
    const jointCylinder2 = jointCylinder.clone();
    jointCylinder.position.x = 4
    jointCylinder2.position.x = - 4;
    jointCylinder.rotation.z = Math.PI / 2; 
    jointCylinder2.rotation.z = Math.PI / 2; 

    
    const LateralCylinder = createCylinder(1, 30, 0xaaaaaa, true);
    LateralCylinder.position.y = 15;
    const LateralCylinder2 = LateralCylinder.clone();
    LateralCylinder.position.x = 4
    LateralCylinder2.position.x = - 4;

    this.add(jointCylinder);
    this.add(jointCylinder2);
    this.add(LateralCylinder);
    this.add(LateralCylinder2);
  }

  animate(position: number, rotation: number) {
    
  }

  
}