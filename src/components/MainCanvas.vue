<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { CanvasObject } from '../module-3D/canvas/canvas-object';
import { RobotBase } from '../module-3D/segments/robot-base';

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

  const robotBase = new RobotBase();

  canvasObject = new CanvasObject(canvas);
  canvasObject.start();
  canvasObject.addObject(robotBase);
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
