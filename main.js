import * as THREE from "three";

let scene, camera;

// シーンを追加
scene = new THREE.Scene();

// カメラを追加
camera = new THREE.PerspectiveCamera(
    50, // 50度の視野角
    window.innerWidth / window.innerHeight, // アスペクト比（画面の横幅と縦幅の比率のこと）
    0.1, // カメラの開始距離
    1000 // カメラの終了距離
);
