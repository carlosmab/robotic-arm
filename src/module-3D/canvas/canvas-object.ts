import * as THREE from 'three';
import { Segment } from '../segments/segment';
import { OrbitControls } from '../../jsm/controls/OrbitControls.js';

export class CanvasObject {
  canvas: HTMLCanvasElement;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  objects: Segment[] = [];

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, canvasElement.width / canvasElement.height, 0.1, 1000);
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.renderer = new THREE.WebGLRenderer({ canvas: canvasElement });
  }

  private setup(): void {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);

    this.renderer.setClearColor(0x555555);

    const gridHelper = new THREE.GridHelper(100, 100);
    this.scene.add(gridHelper);

    this.controls.target.set(0, 0, 0);
    this.controls.update();

    this.camera.position.z = 100;
    this.updateCanvasSize();
  }

  private updateCanvasSize(): void {
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.camera.aspect = this.canvas.width / this.canvas.height;
    this.camera.updateProjectionMatrix();
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    for (const object of this.objects) {
      // object.animate();
    }
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.updateCanvasSize();
  }

  addObject(object: Segment): void {
    this.objects.push(object);
    this.scene.add(object);
  }

  start(): void {
    this.setup();
    this.animate();
  }
}