import { reactive } from 'vue';

interface RotationVariables {
  baseRotation: number;
  upperArmRotation: number;
  lowerArmRotation: number;
  gripRotation: number;
}

export const rotationStore: RotationVariables = reactive({
  baseRotation: 0,
  upperArmRotation: 0,
  lowerArmRotation: 0,
  gripRotation: 0,
});
