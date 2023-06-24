<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { CanvasObject } from '../module-3D/canvas/canvas-object';
import { RobotBase } from '../module-3D/segments/robot-base';
import { UpperArm } from '../module-3D/segments/upper-arm';
import { LowerArm } from '../module-3D/segments/lower-arm';
import { Grip } from '../module-3D/segments/grip';

const canvasContainerRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
let canvasObject: CanvasObject | null = null;

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

  const robotBase = new RobotBase(0xaaaaee);
  const upperArm = new UpperArm(0xaaaaee);
  const lowerArm = new LowerArm(0xaaaaee);
  const grip = new Grip(0xaaaaee);

  canvasObject = new CanvasObject(canvas);
  canvasObject.start();
  canvasObject.addObject(robotBase);
  canvasObject.addObject(upperArm);
  canvasObject.addObject(lowerArm);
  canvasObject.addObject(grip);
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
