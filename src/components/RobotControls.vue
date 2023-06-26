<template>
  <div class="control-panel">
    <div class="control">
      <label for="base-rotation">Base Rotation:</label>
      <input
        id="base-rotation" 
        type="range" 
        v-model="rotationStoreRef.baseRotation" 
        min="-180" 
        max="180" 
        step="1" 
      />
    </div>
    <div class="control">
      <label for="upper-arm-rotation">Upper Arm Rotation:</label>
      <input 
        id="upper-arm-rotation" 
        type="range" 
        v-model="rotationStoreRef.upperArmRotation" 
        min="-180" 
        max="180" 
        step="1" />
    </div>
    <div class="control">
      <label for="lower-arm-rotation">Lower Arm Rotation:</label>
      <input 
        id="lower-arm-rotation" 
        type="range" 
        v-model="rotationStoreRef.lowerArmRotation" 
        min="-180" 
        max="180" 
        step="1" />
    </div>
    <div class="control">
      <label for="grip-rotation">Grip Rotation:</label>
      <input 
        id="grip-rotation" 
        type="range" 
        v-model="rotationStoreRef.gripRotation" 
        min="-180" 
        max="180" 
        step="1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { rotationStore } from '../store/rotationStore.ts';


const rotationStoreRef = reactive(rotationStore);
</script>

<style scoped>
.control-panel {
  position: fixed;
  bottom: 100px;
  right: 100px;
  background-color: rgba(0, 0, 0, 0.3);
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