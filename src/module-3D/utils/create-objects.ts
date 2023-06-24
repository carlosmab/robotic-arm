import * as THREE from "three";

export const createBox = (width: number, height: number, depth: number, color: number) => {
  const boxGeometry = new THREE.BoxGeometry(width, height, depth );
  const boxMaterial = new THREE.MeshPhongMaterial({ color: color });
  return new THREE.Mesh(boxGeometry, boxMaterial);
}

export const createCylinder = (radius: number, height: number, color: number, isMetal: boolean = false) => {
  const cylinderGeometry = new THREE.CylinderGeometry(radius, radius, height, 32);
  const cylinderMaterial = new THREE.MeshStandardMaterial({ 
    color: isMetal ? 0x888888 : color,});  

  if (isMetal) {
    cylinderMaterial.metalness = 0.5;
    cylinderMaterial.roughness = 0.2;
  } 

  return new THREE.Mesh(cylinderGeometry, cylinderMaterial);
}