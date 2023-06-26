<template>
  <div class="control-panel">
    <div class="control">
      <label for="base-rotation">Base Rotation:</label>
      <input id="base-rotation" type="range" v-model="baseRotation" min="-180" max="180" step="1" />
    </div>
    <div class="control">
      <label for="upper-arm-rotation">Upper Arm Rotation:</label>
      <input id="upper-arm-rotation" type="range" v-model="upperArmRotation" min="-90" max="90" step="1" />
    </div>
    <div class="control">
      <label for="lower-arm-rotation">Lower Arm Rotation:</label>
      <input id="lower-arm-rotation" type="range" v-model="lowerArmRotation" min="-180" max="0" step="1" />
    </div>
    <div class="control">
      <label for="grip-rotation">Grip Rotation:</label>
      <input id="grip-rotation" type="range" v-model="gripRotation" min="-90" max="180" step="1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { rotationStore } from '../store/rotationStore.ts';

const baseRotation = ref<number>(rotationStore.baseRotation); 
const upperArmRotation = ref<number>(rotationStore.upperArmRotation); 
const lowerArmRotation = ref<number>(rotationStore.lowerArmRotation); 
const gripRotation = ref<number>(rotationStore.gripRotation);

watch(
  [baseRotation, upperArmRotation, lowerArmRotation, gripRotation],
  ([base, upperArm, lowerArm, grip]) => {
    rotationStore.baseRotation = base;
    rotationStore.upperArmRotation = upperArm;
    rotationStore.lowerArmRotation = lowerArm;
    rotationStore.gripRotation = grip;
  }
);

</script>

<style scoped>
.control-panel {
  position: fixed;
  top: 100px;
  left: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  color: white;
}

.control {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="range"] {
  width: 100%;
}
</style>