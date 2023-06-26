<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { CanvasObject } from '../module-3D/canvas/canvas-object';
import { RobotBase } from '../module-3D/segments/robot-base';
import { UpperArm } from '../module-3D/segments/upper-arm';
import { LowerArm } from '../module-3D/segments/lower-arm';
import { Grip } from '../module-3D/segments/grip';
import { rotationStore } from '../store/rotationStore';

const canvasContainerRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
let canvasObject: CanvasObject | null = null;
let robotBase: RobotBase = new RobotBase(0xaaaaee);
let upperArm: UpperArm = new UpperArm(0xaaaaee);
let lowerArm: LowerArm = new LowerArm(0xaaaaee);
let grip: Grip = new Grip(0xaaaaee);

onMounted(() => {
  const canvasContainer = canvasContainerRef.value;
  const canvas = canvasRef.value;

  if (!(canvasContainer && canvas)) { 
    return; 
  }
  
  canvas.width = canvasContainer.clientWidth;
  canvas.height = canvasContainer.clientHeight;

  const resizeCanvas = () => {
    canvas.width = canvasContainer.clientWidth;
    canvas.height = canvasContainer.clientHeight;
    
    if (canvasObject) {
      canvasObject.onWindowResize();
    }
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  robotBase.addChild(upperArm);
  upperArm.addChild(lowerArm);
  lowerArm.addChild(grip);

  canvasObject = new CanvasObject(canvas);
  canvasObject.start();
  canvasObject.addObject(robotBase);
  // canvasObject.addObject(upperArm);
  // canvasObject.addObject(lowerArm);
  // canvasObject.addObject(grip);

});


watch(() => rotationStore.baseRotation, () => {
  let angle = rotationStore.baseRotation * Math.PI / 180;
  robotBase.rotation.y = angle;
});

watch(() => rotationStore.upperArmRotation, () => {
  let angle = rotationStore.upperArmRotation * Math.PI / 180;
  upperArm.rotate(angle);
});

watch(() => rotationStore.lowerArmRotation, () => {
  let angle = rotationStore.lowerArmRotation * Math.PI / 180;
  lowerArm.rotate(angle);
});

watch(() => rotationStore.gripRotation, () => {
  let angle = rotationStore.gripRotation * Math.PI / 180;
  grip.rotate(angle);
});


</script>

<template>
  <div class="canvas-container" ref="canvasContainerRef">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
.canvas-container {
  padding: 50px;
  width: calc(100vw - 200px);
  height: calc(100vh - 200px);
  background-color: #f0f0f0;
}

</style>
